var posts=["CEC1000/","DDA2001/","ENG1002/","CSC1003/","ENG1001/","CSC1004/","IT-guide/","MAT1002/","MAT2041/","PHY1001/","STA2001/","about/","contact-school/","timeline/","course-evaluation/","map/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };