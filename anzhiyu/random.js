var posts=["CEC1000/","CSC1004/","CSC1003/","DDA2001/","MAT1002/","ENG1001/","IT-guide/","ENG1002/","MAT2041/","PHY1001/","contact-school/","about/","course-evaluation/","STA2001/","timeline/","map/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };