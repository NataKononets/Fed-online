window.onload = function () {
  // 1
  let texstStr =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non enim itaque tempore maxime ducimus numquam natus sit unde rerum assumenda temporibus ea excepturi vero id ab minus, voluptatibus pariatur illo officia totam nisi nostrum placeat exercitationem! Maiores eveniet vero dolorem deserunt, odio quae nesciunt accusamus corrupti rerum? Excepturi, deleniti similique";
  let result = texstStr.match(/[A-Z]/g);
  console.log(result);
  // 2
  let operation = "5 plus 7=3";
  let result1 = operation.match(/\d+/g);
  console.log(result1);
  // 3
  let words = texstStr.match(/\b[a-zA-Z]{5}\b/g);
  console.log(words);
};
