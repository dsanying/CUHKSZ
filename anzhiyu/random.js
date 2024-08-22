var posts=["CEC1000/","CSC1003/","DDA2001/","ENG1002/","CSC1004/","ENG1001/","IT-guide/","MAT1002/","MAT2041/","STA2001/","PHY1001/","about/","contact-school/","course-evaluation/","lgu-guide-1/","lgu-guide-3/","lgu-guide-2/","timeline/","map/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };