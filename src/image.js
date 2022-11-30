const image =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADw8PDr6+vT09ONjY28vLykpKR1dXVeXl4vLy8XFxdGRkb6+vr19fU+Pj5ra2uenp5XV1fi4uLGxsbb29tSUlJqamrg4ODn5+fPz8/W1taWlpapqak7OzvJyckhISF9fX0QEBC1tbVMTEwyMjJ7e3uFhYUkJCQYGBiQkJDqIC7IAAANUUlEQVR4nO2d6WKyOhCGBWVxAQHF3apoq+39X+BhFQhJJoMk9PP0/VuqeZzJzGQS42Dwpz/h5OhO30OQqPBnriWa/4R9D0WKTjOt1OzU93A6l7PW6lq/mbcuIo1UtOh7UF1q2+BLtO17WN3JOVMJz+/jqOQcfM7FvgfWlU4MQE17l4g6YxLO+h5aN1owATXtPeLpgUN46HtwnWjMIRz3PThQi5Fp7vl5jZEqMkEJw4nV4XCx2tmPbJyTy579lMsB1DSX/Y+Oq+dy+6HcxSEymqaKS7Ibk7EloaPX1APjpcArIO+MB9sRujohjrGlyL1pU0LaivFoG8IGoHLEeQOQidiGkAIYSyYQKY8CGCPa1NHiCemAKq1oUgFjxCVtuGhChw6oMtxMIjphdKY8jCdkAarz0yvDhLER/ebTaEKmCdUZ8cYwYYLY/JjRhGxAVUZ0mSaMCb8oj+MIGWFGJeGJQzjVGrUNkpDjo8rc9MgjjBqLWiQhF1ARocEjnGrmS4R8EypKiXzC6EF8zjhCPqAiwgOXcEqu21GE3DCjjJBV0TwRh+0JAUBF83ADEdbboBhCyISqihp2ws8RRy0JgTCjjpAfasiMgSAEAVWtLoYA4VS7tiL8NSYcDO6QEc+VgYsT/hoTxoOOgKmoGS0IwTCjcpHPLdxSxDJjCBOCgEr7bZ+QEcuMIUr4q0wIrC9SxB2SEA4zilumayjYfCIJQUDVDdMtaMQjivAXZYpCUNqfag6G8NeZMJYGBZsLgvCXhZlM7I5bgbhJnxPaXQMBe9l9mglmjIBDGGSP/EoTDgZ70IjZ1qnALvfvNOFgYEMLRSt9LOQQZocUwUAqKcw4u+vhYJns4xI6lBNzH/xkAuZJ84WFr+O4sVqZ2Ay06TnWdzQ5DBnP+JARs8eWTMJ8J6e1Cd1hIbQfL+fTx6TQ+WzQ38NhbdHUCZmnMYqTGC1NWPKlQjHa0aSm8+RKfQ5oShW7GKyUKJju6UMn+BI7CvM5t/OE1HS2oz0a8LvDBQL9WNRzhrfwUafBl0iUcNwETBhtygvw+27a87mQcoK2POyN91GdCihqxfs3DXAyeZwpZ7R4GSP6qAzpRgDeKqPBmrDpoCjEkUYHTKbjg9yU4DY0qr2MuMqrJo3P2rzGbaix+QTDTfBgEk4m3yvyiwQW24gaMXV3lwzy80L8gZfxySE7DAcVN+Io4gDGrhpdCLdhNjTKRXApfbFZUAYhbkI+n5ARLzwTpox5MVaI2dDQ6BmGJrYR6wPmOqioEecAYOKq89qpkjEdsblXypFQmKFnCFLQW22pmYJUtK5Uqzo92OC+bAD7KDABhd10NBUhjF31Xn68IWW5H1FPD7FF99PKaAX5YMIlIxk2dJ4cn/+010hHxQLSEcvBCkzAzgnj6VgWcttZzYyR9tggAQcURy3pxflgwpCfLOrSvOcoro/iPG1cn31bvLdgymEYUNhBhQjFIk2hx6QsAJb2JM3nj/G1dc/hefC5sqZFGXAoUH0LZIuqztUaZ7gJw5e/rkWcXccCwoQGlPFJROElSzthAeGMv8dMxFgPxuHnjoSbg0Oh0ptbeVMUiRdneCGyhKgJk/yNI5zMJRJiAcWaNYZ4SsyMKO87dugwI7jIp3cxmHpcpBFiZ6FwL2qMs6I8N5UFGC8SxervwojSEoY0wHhZ+4Ew41TW9yRx0xBbSVkP4dkYyboEAkPYYvNGv08FM+O0xUJCSOKELfcXw0CsvjlLuzpAlK/99uJSaDp+wC/UUmKAL22fOv4DdNWH1xVQQyL58OXdU92OAMZpoxHemeCytJMN/j0wHT8lbrJDfF299fWTkzm+j/ALtBbfiB1u7zsHjemq8uJMIjV86TuR28KFznIvfmCmRAknbEYzWuaYYvuiWDEQ5cz94zc5HR8K7l+hIUo7xucQhVwUKLkIicyKUo+ALezvcw55ns7kJcK6ahFV+gmw7XF91iItuh1G8MOdyckhlV2R8dZXA/7pT/3L4arv0b2q4fErmM05mgX2sd+7AJ1huB9xtQ+ZBc/em3zMZ4DmH5OxyjRRlxvu+HiZdiH1QpH7J4iX65M8NKRKGxG8TM3mmB58CPIlhrxJ3jSkyhHnS5yVcNXhXNSAmT7UX5bnogBj1RFvOMDZ7KbaUXEWTK1Y/fc7wkUzzak3JklUiCYcVfxsNMECxuFG9tK3Ll0oiNa1K/3Mw/poIrVXHgJJkK7nfsoC7aOpEVVeyu22MGGswohWK8K5yps5F60AR0X91cpJ1bppKyct3bSVCWMpTBjtAEdFfdkikiaaqyts8MkwU3540m1J+KFulfEi4fvb8H8wD98/lr5/Pnz/mub969L/wdri/deH/4M1/v+gT/P+vbZY794vHbx/zzvRu+9b5C/x1ntPf/rTG6mfn0VR9KZD8x7cbreVfVS5etL3y2ss87SRnYq3RrAKxqmCladqebFdXs2ndlIZ/QIv0+pLRfXmVvkScX6Y6EWZQY0vsSP7J4I605DgSySn7g+91biplewSjgZomsvuzyfqBo0vMaPcKs6l8cW67rqNrM7xRjroU3J/ppEBmDB2GcuXYyZf7Kcyvwe8ofpo19Nx88Vw0EIdvQ9NPL7YjJ1MR9248fnGK3lnvbdcE3YzHa+NDNFQYMAv01I7ADDRa9NxtwYcNJW8WCMAGKt92QFOwMKIsiobVqogXbXldHSJEo2tlazWogtNw6fI1qGIrrwMoYhQFyY0Tew3dUdCE7AglFXWCHppLtRcOSD44nko60ssDorwiiiRLyjA3mPpU8KJ+SI8AzMTytsMHslBtHAWlLmAoi+dOBJari6gKo2UzMUFEtC8ioSEL5yPjlcyuzVgYUpKYDAbpI8GcjeDl90b0UeaUFqqyIRLGKbITFwjAav1jD7cbl8FdvVh7U5PHYsIvcEQZcJgXALurYvtrT37y6feiy2kjXm0fN+3jsvydXGFjWlC7VTUNLyVd7XvLp5dyPtqF3z2lm8V8suWurPDhBtwIu7ECVfe0+d1Y21X5V3wCyr9WPKljNfyV3bInjCPEHpnYcJgXHr8wm7Iw7aKF1ZT5WA33RGGgovem1/6+9ZrEtoerruw9SmEVuUK05GgGUEvFYs0q3tlweRS+GKtMVHVpQJaVmVh657EGMGNG4FssVrXouWBTmhjGlRXOqBVi/1DIULwvQ6QEYNbvQUcrhmEa/GsETJMaPn1xTW/QZwKXgYAEzFYHQg3uDMAbfvefHWncQl5qiMD0LKIy2/A6ShSen9xHfSL7MksaWEmDzZE72Rr+j+GYfz4JtH2GLJMGBuRjMlA5hDJxCF79RSMGy/gMPliwpo7h/7dKHT3a5H2xASsB5vig3rNhMlGL4MvoNyXdGSbsOamjlXypYzVkbPiTCqKVcIXZmEqehdj9UP5fIasMJPFmvK5H4PUT5ma2U6a+CnlbV1GISdaLTp2E3FFL1JYmSInLOyk3xuAsRmfQ+cSWtTduyFtOiLK4R/CUSkTMNWIa0J7nYddp2nB1Ir5B+DwCX16w3nRmIOoNc1uXWnpB0Fzume6cAGfXnqkAhpGMa/5hGTGKOTsa3xkgAZ1utxWQazVbXxkBSiTF2YSZY8taD6a+mluHT6g5bPihxOama9er6c2fff4Mzoeryd2re7yfdS280aqzwA0DD97gBtLE0T2vou7DcNwIWvzywIA8zNT1DBTCzZ7wE1pGUOFqIumGmE2/iWHMBs6a2VRGrGPk/ODgQEA2rkPsuJMJdaYACE9Y8jWDjRh/sEfOITFb1iCRlR5ELIQZEEvt4/DATSMPIYsISO2+02Ql3QFTThAEEIJw3qhRdlSOghYxD8xQjCcWqq/xeJDTvpcV4gRchbBuVRdYZgrhEy4fq5+BQnpzbaqn6r9Kgu7dZHLfz4qSAhnDJm3+TZ0Ak1Y6XQKEsJpX2HG4LUuUlX7F6KEgx0YbNR9BwLMFF+VsQgTOlCw8eVfeJsLzhTVoQgTsrumT6nKGKAJa91ucUJ4FaUq7UOzcF1rOyAIOX3TXGoA+f01u5opkIRgxvDVuCm4qKgPA0PoQoSyfiukLqA74xHlFYYQyhjMjk23AgLNF/E4ihAqT9WEGj7hmvyYcYQLvhHVEHJ2m2zKviiOkJ8xGjtRcsRdV3iNFQCSkJsxFK0vHE628JoLACQht6HhN56WI16TrZmwsIQOh1BVy42dEMlMkY4YSTgYMf1UUToccDZkyEyRCE3Izhjq1sCsTTXqKSE8IauhwdhmkyKf6qcetTDGEw6WVERfaS/qTkH0fqiPtiAcXGmIajv7jtFAZAC2IqQg+u1/KbqljsRcXLPCQCvCwYlA9HvYYNtUz5SuDWa10Y5wMKya0QfPVMrRJjn3HMu+HDlRriVhctwiPRKdnInuhy+VvtnvF8A5JIHdNZbc4WIh78edOpPADuk/rhNnl1tZB1Sq4JMK/7wsJmEPO7tSBJ4Y+vd1pSPeezlhIUf0hKHyImLZcqmEvz/RIaT/kI56px3I/adFzMV3moOFFta9gLzfrbeJojUNlzFkLKvPSlq+/i4I/RNa/wGULCli34XYewAAAABJRU5ErkJggg==";

export default image;