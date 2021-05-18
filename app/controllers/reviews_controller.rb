class ReviewsController < ApplicationController
  before_action :set_review, only:[:show,:update,:destroy]
  # GET /users
  ### MAKE SURE JSON: always ligted up blue!!!######
  def index
    #deeply nested... so starts with gyms,goes to trainers,goes to clients.
    #since clients belongs to trainer we use trainer here..
    #but in trainers_controller the trainers belongs to gyms so gyms is used orignally.
    @product=Product.find(params[:product_id])
    @reviews=Review.where(product_id: @product.id)
    render json:@reviews, status: :ok
  end

  # GET /users/1
  def show
    render json:@review
  end

  # POST /users
  
  def create
     @review = Review.new(review_params)
    if @review.save
    render json: @review,status: :created
    else
      render json: @review.errors ,status: :unprocessable_entity
    end
  end

  # PUT AKA UPDATE /users/1
  def update
    if @review.update(review_params)
    render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
  end
end

  # DELETE /users/1
  def destroy    
    @review.destroy
    puts "Destroyed"

  end


  private
  #this method finds a single user in the database
  def set_review
    @review=Review.find(params[:id])
  end

  def review_params
   
    product_id = params[:product_id]

   

    params.require(:review).permit(:comment, :rating ).merge(product_id: product_id) 
  end
end
