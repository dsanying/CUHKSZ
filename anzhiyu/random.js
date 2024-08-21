var posts=["DDA2001/","ENG1001/","ENG1002/","PHY1001/","MAT2041/","MAT1002/","contact-school/","course-evaluation/","STA2001/","map/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };