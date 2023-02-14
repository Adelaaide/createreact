import React from "react";

const Card = ({ name, email, username, id }) => {
    return (
        <div className="tc bg-light-green dib br3 pa0.5 ma2 grow bw2 shadow-1">
            <img  alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <h4>{username}</h4>
                <p>{email}</p>
            </div>
            </div>
    );
}

// OR
// class Card extends Component {
//     render() {
//         return (
//                 <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//                 <img  alt="tests" src={"https://robohash.org/$(props.id)?200x200"} />
//                 <div>
//                     <h2>{this.props.name}</h2>
//                     {/* <h4>{this.props.username}</h4> */}
//                     <p>{this.props.email}</p>
//                 </div>
//             </div>
//         );
//     }
// }

export default Card;