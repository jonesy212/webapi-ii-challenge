
exports.seed = function(knex, Promise) {
  return knex('comments').truncate()
    .then(function () {
      return knex('comments').insert([
        {comment: "Let your workings remain a mystery. Just show people the results.", post_id: 1},
        {comment: "True mastery can be gained by letting things go their own way. It can't be gained by interfering.", post_id: 1 },
        {comment: "Not-knowing is true knowledge. Presuming to know is a disease.", post_id: 2 },
        {comment: "Success or failure: which is more destructive?", post_id: 4 },
        {comment: "When two great forces oppose each other the victory will go to the one that knows how to yield.", post_id: 4 },
        {comment: "Things arise and she let's them come; things disappear and she let's them go.", post_id: 4 },
        {comment: "A good travel has no fixed plans and is not intent upon arriving. A good artist lets his intuition lead him where ever it wants.", post_id: 5 },
        {comment: "When you look for it, there is nothing to see. When you listen for it, there is nothing to hear. When you use it, it is inexhaustible.", post_id: 7 },
        {comment: "She acts without expectation, succeeds without taking credit and doesn't think she is better than anyone else.", post_id: 7 },
        {comment: "Act without doing; work without effort.", post_id: 7 },
        {comment: "Do you have the patience to wait until your mud settles and the water is clear? Can you remain unmoving until the right action arises by itself?", post_id: 8 },
        {comment: "He who tries to shine dims his own light. He who defines himself can't know who he really is. He who clings to his work will do nothing that endures. Just do your job, then let go.", post_id: 8 }
      ]);
    });
};
