const Button = ({set,num}) => {
    const click = () =>{
        set(num + 1 )
    }
  return (
    <div className="box-button">
      <button className="refresh">CE</button>
      <button className="del">Del</button>
      <button className="init plus operation">+</button>
      <button className="init minus operation">-</button>
      <button className="init times operation">*</button>
      <button className="init divide operation">/</button>
      <button className="number">9</button>
      <button className="number">8</button>
      <button className="number">7</button>
      <button className="number">6</button>
      <button className="number">5</button>
      <button className="number">4</button>
      <button className="number">3</button>
      <button className="number">2</button>
      <button className="number">1</button>
      <button className="number" onClick={click}>{num}</button>      
      <button className="dot">.</button>
      <button className="init equal">=</button>
    </div>
  );
};

export default Button;
