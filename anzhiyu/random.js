var posts=["DDA2001/","CSC1003/","CEC1000/","CSC1004/","ENG1001/","ENG1002/","IT-guide/","MAT1002/","PHY1001/","MAT2041/","about/","map/","contact-school/","STA2001/","course-evaluation/","timeline/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };