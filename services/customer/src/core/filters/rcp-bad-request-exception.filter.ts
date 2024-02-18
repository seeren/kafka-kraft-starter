import { BadRequestException, Catch, ExceptionFilter } from '@nestjs/common';
import { throwError } from 'rxjs';

@Catch(Error)
export class RcpEBadRequestExceptionFilter
  implements ExceptionFilter<BadRequestException>
{
  catch(exception: BadRequestException) {
    return throwError(() => exception.getResponse() || exception.message);
  }
}
