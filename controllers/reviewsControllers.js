const Review = require('../models/reviews');

module.exports.WriteReview = async(req,res,next)=>{
        const campground = await Campground.findById(req.params.id);
        const review  = new Review(req.body.review);
        review.author = req.user._id;
        campground.reviews.push(review);
        await review.save();
        await campground.save();
        req.flash('success' , 'Successfully Posted A Review');
        res.redirect(`/campgrounds/${campground._id}`)
}

module.exports.deleteReview =async(req,res,next) => {
        const {id, reviewId }  = req.params;
        await Campground.findByIdAndUpdate(id, {$pull: { reviews : reviewId}});
        await Review.findByIdAndDelete(reviewId);
        req.flash('success' , 'Successfully Deleted Your Review');
        res.redirect(`/campgrounds/${id}`);
} 