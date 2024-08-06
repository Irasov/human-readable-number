module.exports = function toReadable (number) {
    let mas1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let mas2 = ['ten','eleven','twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let mas3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let num = number.toString();
    let count = num.length;
  
    let unit = (num) => {
      return mas1[parseInt(num)];
    }
  
    let tents = (num) => {
      if(num[0] == '1') {
          if (num[1] == '0') {
            return mas2[0];
          } else if (num[1] == '1') {
        return mas2[1];
      } else if (num[1] == '2') {
        return mas2[2];
      } else {
        return mas2[num[1]]; 
      }
      } else if(num[1] == '0'){
          return mas3[num[0]-2];
      } else {
        return mas3[num[0]-2] + ' ' + unit(num[1]) ;
      } 	
    }
    
    let thousands = (num) => {
      if(num[1] == '0' && num[2] == '0') {
          return mas1[num[0]]+' hundred'
      } else if (num[1] == '0') {
        return mas1[num[0]]+' hundred ' + unit(num[2]);
      } else {
          return mas1[num[0]]+' hundred ' + tents(num.slice(1));
      }	 
    }  
  
    if(count == 1) {
      return unit(num);
    } else if( count == 2 ) {
      return tents(num);
    } else if( count == 3 ) {
      return thousands(num);
    }   	
}
