// Um nome de classe dinâmica
const buttonStatus = "ativado";
const buttonClass = buttonStatus === "ativado" ? "btn-enabled" : "btn-disabled";
const element = <button className={buttonClass}>Clique em mim!</button>;
