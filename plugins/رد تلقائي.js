
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^نيزيكو$/i.test(m.text)) { 
     responses = [ 
 '*ها وش تريد 🗿*'  
     ];
    
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى النقطه*',  
     ];
            
            }else if (/^نيزكو$/i.test(m.text)) { 
     responses = [ 
       '*اسمي نيزوكو ي غبي باكااا*',  
     ];
    
    }else if (/^اكيرا$/i.test(m.text)) { 
     responses = [ 
       '*عمك*',  
     ];
        }else if (/^المطور$/i.test(m.text)) { 
     responses = [ 
       '*السيد اكيرا*',  
     ];
        }else if (/^مطور$/i.test(m.text)) { 
     responses = [ 
       '*عمك اكيرا*',  
     ];
        }else if (/^.مطور$/i.test(m.text)) { 
     responses = [ 
       '*حط ال*',  
     ];
       
        }else if (/^.تعدين$/i.test(m.text)) { 
     responses = [ 
       '*ف هذا البوت اسمها التعدين*',  
     ];
      
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
