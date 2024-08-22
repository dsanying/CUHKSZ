var posts=["CEC1000/","CSC1003/","CSC1004/","ENG1001/","DDA2001/","MAT1002/","ENG1002/","IT-guide/","PHY1001/","MAT2041/","about/","STA2001/","contact-school/","map/","course-evaluation/","timeline/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };