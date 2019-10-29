import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { objectExpression } from '@babel/types';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata) {
    if (value instanceof Object && this.isEmpty(value)) {
        throw new HttpException('validation failed: No body submitted', HttpStatus.BAD_REQUEST);
    }

    const { metatype } = metadata;
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new HttpException(`Validation failed: ${this.formatErrors(errors)}`, HttpStatus.BAD_REQUEST);
    }
    return value;
  }

  // tslint:disable-next-line: ban-types
  private toValidate(metatype: Function): boolean {
    // tslint:disable-next-line: ban-types
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }

  private formatErrors(errors: any[]) {
    return errors.map(err => {
        // tslint:disable-next-line: forin
        for (const property in err.constraints) {
            return err.constraints[property];
        }
    })
    .join(', ');
  }

  private isEmpty(value: any) {
      if (Object.keys(value).length > 0) {
          return false;
      }
      return true;
  }
}
