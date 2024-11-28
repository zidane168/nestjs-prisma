import { Prisma } from '@prisma/client';
import { addHours } from 'date-fns';

export function setTimezoneMiddleware(): Prisma.Middleware {
  return async (params, next) => {

    const adjustTimezone = (date) => {
      if (date) {
        return addHours(new Date(date), 7); // Adjust by +7 hours for UTC+7
      }  
      return addHours(Date.now(), 7);
    };

    console.log(' -----------=> setTimezoneMiddleware outside <=----------- ') 
    console.log (params.args)

    if (params.action === 'create') { 
      params.args.data.created = adjustTimezone(params.args.data.created);

      if ( params.args.data.updated ) {
        params.args.data.updated = adjustTimezone(params.args.data.updated);  
      } 
    }

    if (params.action === 'update') {
      params.args.data.updated = adjustTimezone(params.args.data.updated);
    } 

    // Adjust other datetime fields as needed
    if (params.args.data && params.args.data.exp) {
      params.args.data.exp = adjustTimezone(params.args.data.exp);
    }

    return next(params);
  };
}
