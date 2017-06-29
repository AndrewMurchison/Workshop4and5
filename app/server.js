import {readDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

function getTicketInfoSync(ticketInfoId){
  var ticketInfo = readDocument('ticketInfo', ticketInfoId);
  //ticketInfo.validationarr = ticketInfo.validationarr.map((id)=> readDocument('validations', id));
  //ticketInfo.num = readDocument('ticketInfo', ticketInfo.num);
  //ticketInfo.amtdue = readDocument('ticketInfo', ticketInfo.amtdue);


  return ticketInfo;
}

export function getTicketInfo(num, cb){
  var ticketInfo = getTicketInfoSync(num);
  emulateServerReturn(ticketInfo, cb);

}
