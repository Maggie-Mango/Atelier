import React from 'react';

function StarRating(props) {
  const scrollToReviews = () => {
    let reviewsSection = document.querySelector('.review-grid');
    reviewsSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  };

  return (
    <div id="overview_star_rating">
      <div className="overview_stars">[Star Rating]</div>
      <div class='go-to-reviews' onClick={scrollToReviews}>Read all reviews</div>
    </div>
  );
};

export default StarRating;