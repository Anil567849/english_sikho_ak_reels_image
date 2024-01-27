function currentDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1; // months are zero-based
    var year = date.getFullYear();
    
    // Pad single-digit day and month with leading zero
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    
    return day + '-' + month + '-' + year;
  }
  
  
export default currentDate;