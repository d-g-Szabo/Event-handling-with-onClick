export default function HamburgerDiv(props) {
  // Write a function to handle the click event
  function handleClick(message) {
    console.log(message);
  }
  return (
    <>
      <div className="hamburger-div">
        <h2>{props.name}</h2>
        <img src={props.src} />
        <p>{props.description}</p>
        {/* Add the handleClick function to onClick event */}
        <button
          onClick={function () {
            handleClick("Say hello!");
          }}
        >
          Click me and I say hello!
        </button>
      </div>
    </>
  );
}

// export default function HamburgerDiv(props) {
//   return (
//     <>
//       <div className="hamburger-div">
//         <h2>{props.name}</h2>
//         <img src={props.src} />
//         <p>{props.description}</p>
//         <button
//           onClick={() => {
//             console.log("Button clicked");
//           }}
//         >
//           Read More
//         </button>
//       </div>
//     </>
//   );
// }
