/**
 * @fileOverview helper and utility functions that can be reused go here.
 */

 import { UNITS,FIATS } from './config';

export const exchange = (amount, unit, fiat, rate)=>{
    const sat = amount * UNITS[unit].denominator;
    const price = sat * rate[fiat];
    return FIATS[fiat].display + price.toString();
}

export const toDate = (time)=>{
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  var date  = new Date(time*1000);
  return date.toLocaleDateString("en-US" ,options);
}

export const TransacionCategory = (category , confirmations)=>{
  if(category == 'send')
  {
    if(confirmations >=1)
    return 'Sent';
    return 'Sending...'
  }
  else
  {
    if(confirmations >=1)
    return 'Received';
    return 'Receiving...'
  }
}