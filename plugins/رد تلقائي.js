//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^نيزيكو$/i.test(m.text)) { 
     responses = [ 
 '*ها وش تريد 🗿*'  
     ]; 
    
   }else if (/^نيزوكو تشان|نيزوكو$/i.test(m.text)) { 
     responses = [ 
'*وش تريد🗿*'
     ]; 
     
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*روح نام*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'عاشششش تفهم'
     ]; 
        }else if (/^وينه لبوت$/i.test(m.text)) { 
     responses = [ 
       'اسمي نيزوكو',  

     ];
     
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^Nezuko$/i.test(m.text)) { 
     responses = [ 
       '*تانجيرو☹️*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا🧸*',  
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
        }else if (/^مين المطور$/i.test(m.text)) { 
     responses = [ 
       '*لما تكبر اقولك*',  
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
