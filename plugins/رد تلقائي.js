//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ]; 
   }else if (/^نيزوكو تشان|نيزوكو$/i.test(m.text)) { 
     responses = [ 
'*وش تريد🗿*'
     ]; 
 }else if (/^شحالك|كيفك$/i.test(m.text)) { 
     responses = [ 
'*بخير دامك بخير*'
     ]; 
   }else if (/نيزوكو_هل انت مرتبطة$/i.test(m.text)) { 
     responses = [ 
'*لا ولا أريد الارتباط🏌🏻‍♂💔*'
   ]; 
   }else if (/^تحبني|بوت $/i.test(m.text)) { 
     responses = [ 
'*مافيه بوت غيرك 🐦*',
'*ورع🤭*',
'*برااااااع 🔚*',
]; 
   }else if (/^تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هاي*',  

     ]; 
    
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*روح نام*',  

     ]; 
   }else if (/^فلسطين$/i.test(m.text)) { 
     responses = [ 
'عاشششش تفهم'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*ها توكل*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       'براااااااع',  

     ];
     }else if (/^وينه لبوت$/i.test(m.text)) { 
     responses = [ 
       'اسمي نيزوكو',  

     ];
     
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*هلا بلحب*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد🧸*', 
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
        }else if (/^اسكت$/i.test(m.text)) { 
     responses = [ 
       '*اسكت انت*',  
     ];
        }else if (/^اصمت$/i.test(m.text)) { 
     responses = [ 
       '*بلاش اهينك*',  
     ];
       
        }else if (/^عبدو$/i.test(m.text)) { 
     responses = [ 
       '*عيونه*',  
     ];
        }else if (/^.تعدين$/i.test(m.text)) { 
     responses = [ 
       '*ف هذا البوت اسمها التعدين*',  
     ];
        }else if (/^اسمع$/i.test(m.text)) { 
     responses = [ 
       '*لا*',  
     ];
      
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
