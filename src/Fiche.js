import React from "react"

class Fiche extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="dishPicture">
                    <div className="hoverEffect, hide">
                        <button className="command">Commander</button>
                    </div>
                    <img src={this.props.dishe.imageSrc} />
                </div>                
                <h3 className="dishName">{this.props.dishe.title}</h3>
                <p className="dishDetails">{this.props.dishe.content}</p>
                <p className="dishPrice">{this.props.dishe.price}</p>
                <div className="divInfo">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="rating">{this.props.dishe.rating}</p>
                    <p className="review">({this.props.dishe.reviews})</p>
                </div>
            </div>
        );
    }
}

export default Fiche;