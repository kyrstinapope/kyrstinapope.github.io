function adjustRating(tickRating)
{
  document.getElementById('ratingvalue').textContent= tickRating;
  document.getElementById('rating').value=tickRating;
  console.log(tickRating);
}