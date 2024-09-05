import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable, timeout } from "rxjs";

export class TimeOutInterceptor implements NestInterceptor{
    //Intercepta la peticion y agrega un timeout de 120 segundos
    
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(timeout(120000));
    }
    
}