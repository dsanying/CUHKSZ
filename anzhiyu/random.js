var posts=["DDA2001/","CEC1000/","CSC1003/","ENG1001/","ENG1002/","CSC1004/","IT-guide/","MAT1002/","PHY1001/","about/","MAT2041/","STA2001/","contact-school/","course-evaluation/","timeline/","map/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };