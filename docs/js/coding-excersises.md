##### Reverse Numbers

    let num = number;
    let rev = 0;
    let rem = 0;

    while (num > 0) {
      rem = num % 10;
      rev = rev * 10 + rem;
      num = parseInt(num / 10);
    }

##### Reverse Numbers
