package com.example.StudentCrud.demo.Aspects;


import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.stream.Collectors;

@Aspect
@Component
public class StudentLoggerAspect {
    //all public functions within the student controller
    @Around("execution(public * *(..)) && within(com.example.StudentCrud.demo.Controllers.StudentController)")
    private Object logAroundEveryPublicMethod(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("\n-----------Student Controller :  ----------");
        System.out.println("\n-----------beginning around advice---------");
        System.out.println("arguments: " + Arrays.stream(pjp.getArgs()).map(Object::toString).collect(Collectors.toList()));
        System.out.println("pointcut as long string: " + pjp.toLongString());
        System.out.println("method signature: " + pjp.getSignature());
        System.out.println("target class: " + pjp.getTarget().toString());
        System.out.println("class in use: " + pjp.getSourceLocation().getWithinType());
        System.out.println("---------around advice concluded---------\n");

        /*Extras : if you want to get the return value of the method called*/
        Object returnedVal = pjp.proceed();
        //System.out.println("returned value: " + returnedVal);
        return returnedVal;
    }

}
