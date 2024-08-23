var posts=["CHM1001/","CEC1000/","CEC2000/","CSC1003/","DDA2001/","MAT1001/","IT-guide/","MAT2041/","MAT1002/","PHY1001/","PED/","contact-school/","STA2001/","about/","lgu-guide-1/","course-evaluation/","map/","lgu-guide-2/","lgu-guide-3/","timeline/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };