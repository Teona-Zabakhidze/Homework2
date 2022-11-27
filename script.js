///Ex.1

const groupOfPeople = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 27 },
];

function getYoungest(groupOfPeople) {
  return Math.min(...groupOfPeople.map((obj) => obj.age));
}

console.log(getYoungest(groupOfPeople));

//Ex.2

const user = {
  name: "Uhtred",
  surname: "Bebbanburg",
  age: 39,
  height: 178,
};

const userTwo = {
  ...user,
};

console.log(userTwo);

///Ex.3

function GameWinner() {
  while (true) {
    const Player1 = Math.trunc(Math.random() * 6) + 1;
    const Player2 = Math.trunc(Math.random() * 6) + 1;
    if (Player1 === 3) {
      console.log("Player1 is Winner");
    } else if (Player2 === 3) {
      console.log("Player2 is Winner");
    } else {
      console.log("It is a tie");
    }
    if (Player1 === 3 || Player2 === 3) {
      break;
    }
  }
}

GameWinner();
