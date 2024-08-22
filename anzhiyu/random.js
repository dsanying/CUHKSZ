var posts=["CEC1000/","CSC1003/","CSC1004/","DDA2001/","ENG1002/","ENG1001/","MAT1002/","IT-guide/","MAT2041/","PHY1001/","about/","course-evaluation/","STA2001/","contact-school/","timeline/","map/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };