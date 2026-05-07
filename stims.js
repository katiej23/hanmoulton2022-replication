// stims.js for Self-Paced Reading Tutorial

const experimentStimuli = [
  {
    "item": 1,
    "condition": "quantificational_they",
    "sentence": "Just one grandchild could inherit the jewelry. - Every grandchild - hoped that - the one who - would inherit - the jewelry - would be - them when - the will - was finally - announced.",
    "question": "Would a grandchild inherit the jewelry?",
    "correct_answer": "Yes"
  },
  {
    "item": 1,
    "condition": "specific_they",
    "sentence": "Just one grandchild could inherit the jewelry. - The youngest grandchild - hoped that - the one who - would inherit - the jewelry - would be - them when - the will - was finally - announced.",
    "question": "Would a grandchild inherit the jewelry?",
    "correct_answer": "Yes"
  },
  {
    "item": 1,
    "condition": "named_they",
    "sentence": "Just one grandchild could inherit the jewelry. - Alex - hoped that - the one who - would inherit - the jewelry - would be - them when - the will - was finally - announced.",
    "question": "Would a grandchild inherit the jewelry?",
    "correct_answer": "Yes"
  },
  {
    "item": 1,
    "condition": "quantificational_he",
    "sentence": "Just one grandchild could inherit the jewelry. - Every grandchild - hoped that - the one who - would inherit - the jewelry - would be - him when - the will - was finally - announced.",
    "question": "Would a grandchild inherit the jewelry?",
    "correct_answer": "Yes"
  },
  {
    "item": 1,
    "condition": "specific_he",
    "sentence": "Just one grandchild could inherit the jewelry. - The youngest grandchild - hoped that - the one who - would inherit - the jewelry - would be - him when - the will - was finally - announced.",
    "question": "Would a grandchild inherit the jewelry?",
    "correct_answer": "Yes"
  },
  {
    "item": 1,
    "condition": "named_he",
    "sentence": "Just one grandchild could inherit the jewelry. - Alex - hoped that - the one who - would inherit - the jewelry - would be - him when - the will - was finally - announced.",
    "question": "Would a grandchild inherit the jewelry?",
    "correct_answer": "Yes"
  },
  {
    "item": 2,
    "condition": "quantificational_they",
    "sentence": "Only one competitor could win the race. - Every competitor - thought that - the one who - would win - the race - would be - them when - the times - were finally - announced.",
    "question": "Was there going to be a winner of a race?",
    "correct_answer": "Yes"
  },
  {
    "item": 2,
    "condition": "specific_they",
    "sentence": "Only one competitor could win the race. - The youngest competitor - thought that - the one who - would win - the race - would be - them when - the times - were finally - announced.",
    "question": "Was there going to be a winner of a race?",
    "correct_answer": "Yes"
  },
  {
    "item": 2,
    "condition": "named_they",
    "sentence": "Only one competitor could win the race. - Taylor - thought that - the one who - would win - the race - would be - them when - the times - were finally - announced.",
    "question": "Was there going to be a winner of a race?",
    "correct_answer": "Yes"
  },
  {
    "item": 2,
    "condition": "quantificational_he",
    "sentence": "Only one competitor could win the race. - Every competitor - thought that - the one who - would win - the race - would be - him when - the times - were finally - announced.",
    "question": "Was there going to be a winner of a race?",
    "correct_answer": "Yes"
  },
  {
    "item": 2,
    "condition": "specific_he",
    "sentence": "Only one competitor could win the race. - The youngest competitor - thought that - the one who - would win - the race - would be - him when - the times - were finally - announced.",
    "question": "Was there going to be a winner of a race?",
    "correct_answer": "Yes"
  },
  {
    "item": 2,
    "condition": "named_he",
    "sentence": "Only one competitor could win the race. - Taylor - thought that - the one who - would win - the race - would be - him when - the times - were finally - announced.",
    "question": "Was there going to be a winner of a race?",
    "correct_answer": "Yes"
  },
  {
    "item": 3,
    "condition": "quantificational_they",
    "sentence": "The rules stated that only one employee could be promoted to supervisor. - Every employee - hoped that - the one who - would be promoted - to supervisor - would be - them when - the decision - was posted - on Friday.",
    "question": "Was the decision posted on Monday?",
    "correct_answer": "No"
  },
  {
    "item": 3,
    "condition": "specific_they",
    "sentence": "The rules stated that only one employee could be promoted to supervisor. - The oldest employee - hoped that - the one who - would be promoted - to supervisor - would be - them when - the decision - was posted - on Friday.",
    "question": "Was the decision posted on Monday?",
    "correct_answer": "No"
  },
  {
    "item": 3,
    "condition": "named_they",
    "sentence": "The rules stated that only one employee could be promoted to supervisor. - Sam - hoped that - the one who - would be promoted - to supervisor - would be - them when - the decision - was posted - on Friday.",
    "question": "Was the decision posted on Monday?",
    "correct_answer": "No"
  },
  {
    "item": 3,
    "condition": "quantificational_he",
    "sentence": "The rules stated that only one employee could be promoted to supervisor. - Every employee - hoped that - the one who - would be promoted - to supervisor - would be - him when - the decision - was posted - on Friday.",
    "question": "Was the decision posted on Monday?",
    "correct_answer": "No"
  },
  {
    "item": 3,
    "condition": "specific_he",
    "sentence": "The rules stated that only one employee could be promoted to supervisor. - The oldest employee - hoped that - the one who - would be promoted - to supervisor - would be - him when - the decision - was posted - on Friday.",
    "question": "Was the decision posted on Monday?",
    "correct_answer": "No"
  },
  {
    "item": 3,
    "condition": "named_he",
    "sentence": "The rules stated that only one employee could be promoted to supervisor. - Sam - hoped that - the one who - would be promoted - to supervisor - would be - him when - the decision - was posted - on Friday.",
    "question": "Was the decision posted on Monday?",
    "correct_answer": "No"
  },
  {
    "item": 4,
    "condition": "quantificational_they",
    "sentence": "The Jones family held a yearly competition to see who would catch the largest fish. - Every family member - thought that - the one who - would catch - the biggest fish - would be - them when - the competition - finished - that evening.",
    "question": "Did the Jones family hold a weekly competition?",
    "correct_answer": "No"
  },
  {
    "item": 4,
    "condition": "specific_they",
    "sentence": "The Jones family held a yearly competition to see who would catch the largest fish. - The oldest family member - thought that - the one who - would catch - the biggest fish - would be - them when - the competition - finished - that evening.",
    "question": "Did the Jones family hold a weekly competition?",
    "correct_answer": "No"
  },
  {
    "item": 4,
    "condition": "named_they",
    "sentence": "The Jones family held a yearly competition to see who would catch the largest fish. - Sky - thought that - the one who - would catch - the biggest fish - would be - them when - the competition - finished - that evening.",
    "question": "Did the Jones family hold a weekly competition?",
    "correct_answer": "No"
  },
  {
    "item": 4,
    "condition": "quantificational_he",
    "sentence": "The Jones family held a yearly competition to see who would catch the largest fish. - Every family member - thought that - the one who - would catch - the biggest fish - would be - him when - the competition - finished - that evening.",
    "question": "Did the Jones family hold a weekly competition?",
    "correct_answer": "No"
  },
  {
    "item": 4,
    "condition": "specific_he",
    "sentence": "The Jones family held a yearly competition to see who would catch the largest fish. - The oldest family member - thought that - the one who - would catch - the biggest fish - would be - him when - the competition - finished - that evening.",
    "question": "Did the Jones family hold a weekly competition?",
    "correct_answer": "No"
  },
  {
    "item": 4,
    "condition": "named_he",
    "sentence": "The Jones family held a yearly competition to see who would catch the largest fish. - Sky - thought that - the one who - would catch - the biggest fish - would be - him when - the competition - finished - that evening.",
    "question": "Did the Jones family hold a weekly competition?",
    "correct_answer": "No"
  },
  {
    "item": 5,
    "condition": "quantificational_they",
    "sentence": "There was only one winner of the apple bobbing competition at the fair each year. - Every participant - expected that - the one who - would get - the most apples - would be - them when - the apples - were counted - after the game.",
    "question": "Was the apple bobbing competition at the fair?",
    "correct_answer": "Yes"
  },
  {
    "item": 5,
    "condition": "specific_they",
    "sentence": "There was only one winner of the apple bobbing competition at the fair each year. - The first participant - expected that - the one who - would get - the most apples - would be - them when - the apples - were counted - after the game.",
    "question": "Was the apple bobbing competition at the fair?",
    "correct_answer": "Yes"
  },
  {
    "item": 5,
    "condition": "named_they",
    "sentence": "There was only one winner of the apple bobbing competition at the fair each year. - Rowan - expected that - the one who - would get - the most apples - would be - them when - the apples - were counted - after the game.",
    "question": "Was the apple bobbing competition at the fair?",
    "correct_answer": "Yes"
  },
  {
    "item": 5,
    "condition": "quantificational_he",
    "sentence": "There was only one winner of the apple bobbing competition at the fair each year. - Every participant - expected that - the one who - would get - the most apples - would be - him when - the apples - were counted - after the game.",
    "question": "Was the apple bobbing competition at the fair?",
    "correct_answer": "Yes"
  },
  {
    "item": 5,
    "condition": "specific_he",
    "sentence": "There was only one winner of the apple bobbing competition at the fair each year. - The first participant - expected that - the one who - would get - the most apples - would be - him when - the apples - were counted - after the game.",
    "question": "Was the apple bobbing competition at the fair?",
    "correct_answer": "Yes"
  },
  {
    "item": 5,
    "condition": "named_he",
    "sentence": "There was only one winner of the apple bobbing competition at the fair each year. - Rowan - expected that - the one who - would get - the most apples - would be - him when - the apples - were counted - after the game.",
    "question": "Was the apple bobbing competition at the fair?",
    "correct_answer": "Yes"
  },
  {
    "item": 6,
    "condition": "quantificational_they",
    "sentence": "The Olympic team had to choose the fastest runner. - Every athlete - thought that - the one who - would run - the fastest - would be - them when - the time - came to choose - the team.",
    "question": "Were the players trying out for the ski team?",
    "correct_answer": "No"
  },
  {
    "item": 6,
    "condition": "specific_they",
    "sentence": "The Olympic team had to choose the fastest runner. - The youngest athlete - thought that - the one who - would run - the fastest - would be - them when - the time - came to choose - the team.",
    "question": "Were the players trying out for the ski team?",
    "correct_answer": "No"
  },
  {
    "item": 6,
    "condition": "named_they",
    "sentence": "The Olympic team had to choose the fastest runner. - Ash - thought that - the one who - would run - the fastest - would be - them when - the time - came to choose - the team.",
    "question": "Were the players trying out for the ski team?",
    "correct_answer": "No"
  },
  {
    "item": 6,
    "condition": "quantificational_he",
    "sentence": "The Olympic team had to choose the fastest runner. - Every athlete - thought that - the one who - would run - the fastest - would be - him when - the time - came to choose - the team.",
    "question": "Were the players trying out for the ski team?",
    "correct_answer": "No"
  },
  {
    "item": 6,
    "condition": "specific_he",
    "sentence": "The Olympic team had to choose the fastest runner. - The youngest athlete - thought that - the one who - would run - the fastest - would be - him when - the time - came to choose - the team.",
    "question": "Were the players trying out for the ski team?",
    "correct_answer": "No"
  },
  {
    "item": 6,
    "condition": "named_he",
    "sentence": "The Olympic team had to choose the fastest runner. - Ash - thought that - the one who - would run - the fastest - would be - him when - the time - came to choose - the team.",
    "question": "Were the players trying out for the ski team?",
    "correct_answer": "No"
  },
  {
    "item": 7,
    "condition": "quantificational_they",
    "sentence": "The students in 10th grade were arguing about who was the smartest. - Every student - expected that - the one who - would win - the argument - would be - them when - the teacher - eventually released - the grades.",
    "question": "Were the students in 10th grade?",
    "correct_answer": "Yes"
  },
  {
    "item": 7,
    "condition": "specific_they",
    "sentence": "The students in 10th grade were arguing about who was the smartest. - The tallest student - expected that - the one who - would win - the argument - would be - them when - the teacher - eventually released - the grades.",
    "question": "Were the students in 10th grade?",
    "correct_answer": "Yes"
  },
  {
    "item": 7,
    "condition": "named_they",
    "sentence": "The students in 10th grade were arguing about who was the smartest. - River - expected that - the one who - would win - the argument - would be - them when - the teacher - eventually released - the grades.",
    "question": "Were the students in 10th grade?",
    "correct_answer": "Yes"
  },
  {
    "item": 7,
    "condition": "quantificational_he",
    "sentence": "The students in 10th grade were arguing about who was the smartest. - Every student - expected that - the one who - would win - the argument - would be - him when - the teacher - eventually released - the grades.",
    "question": "Were the students in 10th grade?",
    "correct_answer": "Yes"
  },
  {
    "item": 7,
    "condition": "specific_he",
    "sentence": "The students in 10th grade were arguing about who was the smartest. - The tallest student - expected that - the one who - would win - the argument - would be - him when - the teacher - eventually released - the grades.",
    "question": "Were the students in 10th grade?",
    "correct_answer": "Yes"
  },
  {
    "item": 7,
    "condition": "named_he",
    "sentence": "The students in 10th grade were arguing about who was the smartest. - River - expected that - the one who - would win - the argument - would be - him when - the teacher - eventually released - the grades.",
    "question": "Were the students in 10th grade?",
    "correct_answer": "Yes"
  },
  {
    "item": 8,
    "condition": "quantificational_they",
    "sentence": "All the performers in the movie were nominated for the same award. - Every performer - hoped that - the one who - would win - the award - would be - them when - the announcer - started to open - the envelope.",
    "question": "Were the performers in a TV show?",
    "correct_answer": "No"
  },
  {
    "item": 8,
    "condition": "specific_they",
    "sentence": "All the performers in the movie were nominated for the same award. - The youngest performer - hoped that - the one who - would win - the award - would be - them when - the announcer - started to open - the envelope.",
    "question": "Were the performers in a TV show?",
    "correct_answer": "No"
  },
  {
    "item": 8,
    "condition": "named_they",
    "sentence": "All the performers in the movie were nominated for the same award. - Quinn - hoped that - the one who - would win - the award - would be - them when - the announcer - started to open - the envelope.",
    "question": "Were the performers in a TV show?",
    "correct_answer": "No"
  },
  {
    "item": 8,
    "condition": "quantificational_he",
    "sentence": "All the performers in the movie were nominated for the same award. - Every performer - hoped that - the one who - would win - the award - would be - him when - the announcer - started to open - the envelope.",
    "question": "Were the performers in a TV show?",
    "correct_answer": "No"
  },
  {
    "item": 8,
    "condition": "specific_he",
    "sentence": "All the performers in the movie were nominated for the same award. - The youngest performer - hoped that - the one who - would win - the award - would be - him when - the announcer - started to open - the envelope.",
    "question": "Were the performers in a TV show?",
    "correct_answer": "No"
  },
  {
    "item": 8,
    "condition": "named_he",
    "sentence": "All the performers in the movie were nominated for the same award. - Quinn - hoped that - the one who - would win - the award - would be - him when - the announcer - started to open - the envelope.",
    "question": "Were the performers in a TV show?",
    "correct_answer": "No"
  },
  {
    "item": 9,
    "condition": "quantificational_they",
    "sentence": "Only one resident at the seniors home would get the corner room. - Every resident - hoped that - the one who - would get - the corner room - would be - them when - the changes - were eventually - decided.",
    "question": "Did the residents live at a seniors home?",
    "correct_answer": "Yes"
  },
  {
    "item": 9,
    "condition": "specific_they",
    "sentence": "Only one resident at the seniors home would get the corner room. - The shyest resident - hoped that - the one who - would get - the corner room - would be - them when - the changes - were eventually - decided.",
    "question": "Did the residents live at a seniors home?",
    "correct_answer": "Yes"
  },
  {
    "item": 9,
    "condition": "named_they",
    "sentence": "Only one resident at the seniors home would get the corner room. - Kai - hoped that - the one who - would get - the corner room - would be - them when - the changes - were eventually - decided.",
    "question": "Did the residents live at a seniors home?",
    "correct_answer": "Yes"
  },
  {
    "item": 9,
    "condition": "quantificational_he",
    "sentence": "Only one resident at the seniors home would get the corner room. - Every resident - hoped that - the one who - would get - the corner room - would be - him when - the changes - were eventually - decided.",
    "question": "Did the residents live at a seniors home?",
    "correct_answer": "Yes"
  },
  {
    "item": 9,
    "condition": "specific_he",
    "sentence": "Only one resident at the seniors home would get the corner room. - The shyest resident - hoped that - the one who - would get - the corner room - would be - him when - the changes - were eventually - decided.",
    "question": "Did the residents live at a seniors home?",
    "correct_answer": "Yes"
  },
  {
    "item": 9,
    "condition": "named_he",
    "sentence": "Only one resident at the seniors home would get the corner room. - Kai - hoped that - the one who - would get - the corner room - would be - him when - the changes - were eventually - decided.",
    "question": "Did the residents live at a seniors home?",
    "correct_answer": "Yes"
  },
  {
    "item": 10,
    "condition": "quantificational_they",
    "sentence": "Of the twenty interns at the law firm, only one would be offered a job afterwards. - Every intern - expected that - the one who - would get - the job offer - would be - them when - the internship - was completed - later that month.",
    "question": "Were the interns at a tech firm?",
    "correct_answer": "No"
  },
  {
    "item": 10,
    "condition": "specific_they",
    "sentence": "Of the twenty interns at the law firm, only one would be offered a job afterwards. - The star intern - expected that - the one who - would get - the job offer - would be - them when - the internship - was completed - later that month.",
    "question": "Were the interns at a tech firm?",
    "correct_answer": "No"
  },
  {
    "item": 10,
    "condition": "named_they",
    "sentence": "Of the twenty interns at the law firm, only one would be offered a job afterwards. - Aiden - expected that - the one who - would get - the job offer - would be - them when - the internship - was completed - later that month.",
    "question": "Were the interns at a tech firm?",
    "correct_answer": "No"
  },
  {
    "item": 10,
    "condition": "quantificational_he",
    "sentence": "Of the twenty interns at the law firm, only one would be offered a job afterwards. - Every intern - expected that - the one who - would get - the job offer - would be - him when - the internship - was completed - later that month.",
    "question": "Were the interns at a tech firm?",
    "correct_answer": "No"
  },
  {
    "item": 10,
    "condition": "specific_he",
    "sentence": "Of the twenty interns at the law firm, only one would be offered a job afterwards. - The star intern - expected that - the one who - would get - the job offer - would be - him when - the internship - was completed - later that month.",
    "question": "Were the interns at a tech firm?",
    "correct_answer": "No"
  },
  {
    "item": 10,
    "condition": "named_he",
    "sentence": "Of the twenty interns at the law firm, only one would be offered a job afterwards. - Aiden - expected that - the one who - would get - the job offer - would be - him when - the internship - was completed - later that month.",
    "question": "Were the interns at a tech firm?",
    "correct_answer": "No"
  },
  {
    "item": 11,
    "condition": "quantificational_they",
    "sentence": "At a convention for salespeople, an award was given to the person who made the most sales that year. - Every salesperson - hoped that - the one who - would win - the award - would be - them when - the company - released - the year end numbers.",
    "question": "Was the convention for salespeople?",
    "correct_answer": "Yes"
  },
  {
    "item": 11,
    "condition": "specific_they",
    "sentence": "At a convention for salespeople, an award was given to the person who made the most sales that year. - The newest salesperson - hoped that - the one who - would win - the award - would be - them when - the company - released - the year end numbers.",
    "question": "Was the convention for salespeople?",
    "correct_answer": "Yes"
  },
  {
    "item": 11,
    "condition": "named_they",
    "sentence": "At a convention for salespeople, an award was given to the person who made the most sales that year. - Robin - hoped that - the one who - would win - the award - would be - them when - the company - released - the year end numbers.",
    "question": "Was the convention for salespeople?",
    "correct_answer": "Yes"
  },
  {
    "item": 11,
    "condition": "quantificational_he",
    "sentence": "At a convention for salespeople, an award was given to the person who made the most sales that year. - Every salesperson - hoped that - the one who - would win - the award - would be - him when - the company - released - the year end numbers.",
    "question": "Was the convention for salespeople?",
    "correct_answer": "Yes"
  },
  {
    "item": 11,
    "condition": "specific_he",
    "sentence": "At a convention for salespeople, an award was given to the person who made the most sales that year. - The newest salesperson - hoped that - the one who - would win - the award - would be - him when - the company - released - the year end numbers.",
    "question": "Was the convention for salespeople?",
    "correct_answer": "Yes"
  },
  {
    "item": 11,
    "condition": "named_he",
    "sentence": "At a convention for salespeople, an award was given to the person who made the most sales that year. - Robin - hoped that - the one who - would win - the award - would be - him when - the company - released - the year end numbers.",
    "question": "Was the convention for salespeople?",
    "correct_answer": "Yes"
  },
  {
    "item": 12,
    "condition": "quantificational_they",
    "sentence": "Only one worker ever gets scheduled for state holidays at the diner. - Every worker - thought that - the one who - would get - the holiday shifts - would be - them when - the schedule - was finally - released.",
    "question": "Were the workers at a clothing store?",
    "correct_answer": "No"
  },
  {
    "item": 12,
    "condition": "specific_they",
    "sentence": "Only one worker ever gets scheduled for state holidays at the diner. - The newest worker - thought that - the one who - would get - the holiday shifts - would be - them when - the schedule - was finally - released.",
    "question": "Were the workers at a clothing store?",
    "correct_answer": "No"
  },
  {
    "item": 12,
    "condition": "named_they",
    "sentence": "Only one worker ever gets scheduled for state holidays at the diner. - Carter - thought that - the one who - would get - the holiday shifts - would be - them when - the schedule - was finally - released.",
    "question": "Were the workers at a clothing store?",
    "correct_answer": "No"
  },
  {
    "item": 12,
    "condition": "quantificational_he",
    "sentence": "Only one worker ever gets scheduled for state holidays at the diner. - Every worker - thought that - the one who - would get - the holiday shifts - would be - him when - the schedule - was finally - released.",
    "question": "Were the workers at a clothing store?",
    "correct_answer": "No"
  },
  {
    "item": 12,
    "condition": "specific_he",
    "sentence": "Only one worker ever gets scheduled for state holidays at the diner. - The newest worker - thought that - the one who - would get - the holiday shifts - would be - him when - the schedule - was finally - released.",
    "question": "Were the workers at a clothing store?",
    "correct_answer": "No"
  },
  {
    "item": 12,
    "condition": "named_he",
    "sentence": "Only one worker ever gets scheduled for state holidays at the diner. - Carter - thought that - the one who - would get - the holiday shifts - would be - him when - the schedule - was finally - released.",
    "question": "Were the workers at a clothing store?",
    "correct_answer": "No"
  },
  {
    "item": 13,
    "condition": "quantificational_they",
    "sentence": "Only one of the children would take over the business. -  Every child - argued that - the one who - should become - the new owner - should be - them when - the father - decided - to retire.",
    "question": "Would one of the children take over the business?",
    "correct_answer": "Yes"
  },
  {
    "item": 13,
    "condition": "specific_they",
    "sentence": "Only one of the children would take over the business. -  The most experienced child - argued that - the one who - should become - the new owner - should be - them when - the father - decided - to retire.",
    "question": "Would one of the children take over the business?",
    "correct_answer": "Yes"
  },
  {
    "item": 13,
    "condition": "named_they",
    "sentence": "Only one of the children would take over the business. -  Avery - argued that - the one who - should become - the new owner - should be - them when - the father - decided - to retire.",
    "question": "Would one of the children take over the business?",
    "correct_answer": "Yes"
  },
  {
    "item": 13,
    "condition": "quantificational_he",
    "sentence": "Only one of the children would take over the business. -  Every child - argued that - the one who - should become - the new owner - should be - him when - the father - decided - to retire.",
    "question": "Would one of the children take over the business?",
    "correct_answer": "Yes"
  },
  {
    "item": 13,
    "condition": "specific_he",
    "sentence": "Only one of the children would take over the business. -  The most experienced child - argued that - the one who - should become - the new owner - should be - him when - the father - decided - to retire.",
    "question": "Would one of the children take over the business?",
    "correct_answer": "Yes"
  },
  {
    "item": 13,
    "condition": "named_he",
    "sentence": "Only one of the children would take over the business. -  Avery - argued that - the one who - should become - the new owner - should be - him when - the father - decided - to retire.",
    "question": "Would one of the children take over the business?",
    "correct_answer": "Yes"
  },
  {
    "item": 14,
    "condition": "quantificational_they",
    "sentence": "Whenever the store closes late, one keyholder has to work overtime to lock up. - Every keyholder - thought that - the one who - would work - overtime - would be - them when - the shop - needed to - close late.",
    "question": "Did the store close early?",
    "correct_answer": "No"
  },
  {
    "item": 14,
    "condition": "specific_they",
    "sentence": "Whenever the store closes late, one keyholder has to work overtime to lock up. - The grumpiest keyholder - thought that - the one who - would work - overtime - would be - them when - the shop - needed to - close late.",
    "question": "Did the store close early?",
    "correct_answer": "No"
  },
  {
    "item": 14,
    "condition": "named_they",
    "sentence": "Whenever the store closes late, one keyholder has to work overtime to lock up. - Raven - thought that - the one who - would work - overtime - would be - them when - the shop - needed to - close late.",
    "question": "Did the store close early?",
    "correct_answer": "No"
  },
  {
    "item": 14,
    "condition": "quantificational_he",
    "sentence": "Whenever the store closes late, one keyholder has to work overtime to lock up. - Every keyholder - thought that - the one who - would work - overtime - would be - him when - the shop - needed to - close late.",
    "question": "Did the store close early?",
    "correct_answer": "No"
  },
  {
    "item": 14,
    "condition": "specific_he",
    "sentence": "Whenever the store closes late, one keyholder has to work overtime to lock up. - The grumpiest keyholder - thought that - the one who - would work - overtime - would be - him when - the shop - needed to - close late.",
    "question": "Did the store close early?",
    "correct_answer": "No"
  },
  {
    "item": 14,
    "condition": "named_he",
    "sentence": "Whenever the store closes late, one keyholder has to work overtime to lock up. - Raven - thought that - the one who - would work - overtime - would be - him when - the shop - needed to - close late.",
    "question": "Did the store close early?",
    "correct_answer": "No"
  },
  {
    "item": 15,
    "condition": "quantificational_they",
    "sentence": "There was finally an opening for president of the PTA. - Every parent - believed that - the one who - should become - president - should be - them when - the opening - was announced - last week.",
    "question": "Did the PTA need a new president?",
    "correct_answer": "Yes"
  },
  {
    "item": 15,
    "condition": "specific_they",
    "sentence": "There was finally an opening for president of the PTA. - The laziest parent - believed that - the one who - should become - president - should be - them when - the opening - was announced - last week.",
    "question": "Did the PTA need a new president?",
    "correct_answer": "Yes"
  },
  {
    "item": 15,
    "condition": "named_they",
    "sentence": "There was finally an opening for president of the PTA. - Ryan - believed that - the one who - should become - president - should be - them when - the opening - was announced - last week.",
    "question": "Did the PTA need a new president?",
    "correct_answer": "Yes"
  },
  {
    "item": 15,
    "condition": "quantificational_he",
    "sentence": "There was finally an opening for president of the PTA. - Every parent - believed that - the one who - should become - president - should be - him when - the opening - was announced - last week.",
    "question": "Did the PTA need a new president?",
    "correct_answer": "Yes"
  },
  {
    "item": 15,
    "condition": "specific_he",
    "sentence": "There was finally an opening for president of the PTA. - The laziest parent - believed that - the one who - should become - president - should be - him when - the opening - was announced - last week.",
    "question": "Did the PTA need a new president?",
    "correct_answer": "Yes"
  },
  {
    "item": 15,
    "condition": "named_he",
    "sentence": "There was finally an opening for president of the PTA. - Ryan - believed that - the one who - should become - president - should be - him when - the opening - was announced - last week.",
    "question": "Did the PTA need a new president?",
    "correct_answer": "Yes"
  },
  {
    "item": 16,
    "condition": "quantificational_they",
    "sentence": "One celebrity gets chosen to present the award for best motion picture every year. - Every celebrity - expected that - the one chosen - to announce - the award - would be - them when - the selection - was made - by the academy.",
    "question": "Was the award for best actress?",
    "correct_answer": "No"
  },
  {
    "item": 16,
    "condition": "specific_they",
    "sentence": "One celebrity gets chosen to present the award for best motion picture every year. - The most famous celebrity - expected that - the one chosen - to announce - the award - would be - them when - the selection - was made - by the academy.",
    "question": "Was the award for best actress?",
    "correct_answer": "No"
  },
  {
    "item": 16,
    "condition": "named_they",
    "sentence": "One celebrity gets chosen to present the award for best motion picture every year. - Ryley - expected that - the one chosen - to announce - the award - would be - them when - the selection - was made - by the academy.",
    "question": "Was the award for best actress?",
    "correct_answer": "No"
  },
  {
    "item": 16,
    "condition": "quantificational_he",
    "sentence": "One celebrity gets chosen to present the award for best motion picture every year. - Every celebrity - expected that - the one chosen - to announce - the award - would be - him when - the selection - was made - by the academy.",
    "question": "Was the award for best actress?",
    "correct_answer": "No"
  },
  {
    "item": 16,
    "condition": "specific_he",
    "sentence": "One celebrity gets chosen to present the award for best motion picture every year. - The most famous celebrity - expected that - the one chosen - to announce - the award - would be - him when - the selection - was made - by the academy.",
    "question": "Was the award for best actress?",
    "correct_answer": "No"
  },
  {
    "item": 16,
    "condition": "named_he",
    "sentence": "One celebrity gets chosen to present the award for best motion picture every year. - Ryley - expected that - the one chosen - to announce - the award - would be - him when - the selection - was made - by the academy.",
    "question": "Was the award for best actress?",
    "correct_answer": "No"
  },
  {
    "item": 17,
    "condition": "quantificational_they",
    "sentence": "There was only one doughnut left in the breakroom. - Every accountant - hoped that - the one who - would get - the doughnut - would be - them when - the coffee break - was - over.",
    "question": "Was the doughnut in the breakroom?",
    "correct_answer": "Yes"
  },
  {
    "item": 17,
    "condition": "specific_they",
    "sentence": "There was only one doughnut left in the breakroom. - The oldest accountant - hoped that - the one who - would get - the doughnut - would be - them when - the coffee break - was - over.",
    "question": "Was the doughnut in the breakroom?",
    "correct_answer": "Yes"
  },
  {
    "item": 17,
    "condition": "named_they",
    "sentence": "There was only one doughnut left in the breakroom. - Kris - hoped that - the one who - would get - the doughnut - would be - them when - the coffee break - was - over.",
    "question": "Was the doughnut in the breakroom?",
    "correct_answer": "Yes"
  },
  {
    "item": 17,
    "condition": "quantificational_he",
    "sentence": "There was only one doughnut left in the breakroom. - Every accountant - hoped that - the one who - would get - the doughnut - would be - him when - the coffee break - was - over.",
    "question": "Was the doughnut in the breakroom?",
    "correct_answer": "Yes"
  },
  {
    "item": 17,
    "condition": "specific_he",
    "sentence": "There was only one doughnut left in the breakroom. - The oldest accountant - hoped that - the one who - would get - the doughnut - would be - him when - the coffee break - was - over.",
    "question": "Was the doughnut in the breakroom?",
    "correct_answer": "Yes"
  },
  {
    "item": 17,
    "condition": "named_he",
    "sentence": "There was only one doughnut left in the breakroom. - Kris - hoped that - the one who - would get - the doughnut - would be - him when - the coffee break - was - over.",
    "question": "Was the doughnut in the breakroom?",
    "correct_answer": "Yes"
  },
  {
    "item": 18,
    "condition": "quantificational_they",
    "sentence": "The hospital needed to hire a new manager. - Every candidate - assumed that - the one who - would get - the job - would be - them when - the selection - was finally - announced.",
    "question": "Was the dentist hiring a new manager?",
    "correct_answer": "No"
  },
  {
    "item": 18,
    "condition": "specific_they",
    "sentence": "The hospital needed to hire a new manager. - The most qualified candidate - assumed that - the one who - would get - the job - would be - them when - the selection - was finally - announced.",
    "question": "Was the dentist hiring a new manager?",
    "correct_answer": "No"
  },
  {
    "item": 18,
    "condition": "named_they",
    "sentence": "The hospital needed to hire a new manager. - Casey - assumed that - the one who - would get - the job - would be - them when - the selection - was finally - announced.",
    "question": "Was the dentist hiring a new manager?",
    "correct_answer": "No"
  },
  {
    "item": 18,
    "condition": "quantificational_he",
    "sentence": "The hospital needed to hire a new manager. - Every candidate - assumed that - the one who - would get - the job - would be - him when - the selection - was finally - announced.",
    "question": "Was the dentist hiring a new manager?",
    "correct_answer": "No"
  },
  {
    "item": 18,
    "condition": "specific_he",
    "sentence": "The hospital needed to hire a new manager. - The most qualified candidate - assumed that - the one who - would get - the job - would be - him when - the selection - was finally - announced.",
    "question": "Was the dentist hiring a new manager?",
    "correct_answer": "No"
  },
  {
    "item": 18,
    "condition": "named_he",
    "sentence": "The hospital needed to hire a new manager. - Casey - assumed that - the one who - would get - the job - would be - him when - the selection - was finally - announced.",
    "question": "Was the dentist hiring a new manager?",
    "correct_answer": "No"
  },
  {
    "item": 19,
    "condition": "quantificational_they",
    "sentence": "A group of teenagers competed to see who could win a trivia contest. - Every teenager - thought that - the one who - would be - most knowledgeable - would be - them when - the answers - were revealed - at the end.",
    "question": "Were the teenagers competing in a trivia contest?",
    "correct_answer": "Yes"
  },
  {
    "item": 19,
    "condition": "specific_they",
    "sentence": "A group of teenagers competed to see who could win a trivia contest. - The oldest teenager - thought that - the one who - would be - most knowledgeable - would be - them when - the answers - were revealed - at the end.",
    "question": "Were the teenagers competing in a trivia contest?",
    "correct_answer": "Yes"
  },
  {
    "item": 19,
    "condition": "named_they",
    "sentence": "A group of teenagers competed to see who could win a trivia contest. - Bailey - thought that - the one who - would be - most knowledgeable - would be - them when - the answers - were revealed - at the end.",
    "question": "Were the teenagers competing in a trivia contest?",
    "correct_answer": "Yes"
  },
  {
    "item": 19,
    "condition": "quantificational_he",
    "sentence": "A group of teenagers competed to see who could win a trivia contest. - Every teenager - thought that - the one who - would be - most knowledgeable - would be - him when - the answers - were revealed - at the end.",
    "question": "Were the teenagers competing in a trivia contest?",
    "correct_answer": "Yes"
  },
  {
    "item": 19,
    "condition": "specific_he",
    "sentence": "A group of teenagers competed to see who could win a trivia contest. - The oldest teenager - thought that - the one who - would be - most knowledgeable - would be - him when - the answers - were revealed - at the end.",
    "question": "Were the teenagers competing in a trivia contest?",
    "correct_answer": "Yes"
  },
  {
    "item": 19,
    "condition": "named_he",
    "sentence": "A group of teenagers competed to see who could win a trivia contest. - Bailey - thought that - the one who - would be - most knowledgeable - would be - him when - the answers - were revealed - at the end.",
    "question": "Were the teenagers competing in a trivia contest?",
    "correct_answer": "Yes"
  },
  {
    "item": 20,
    "condition": "quantificational_they",
    "sentence": "The children in the class were lined up to see who was the tallest. - Every child - thought that - the one who - would be - the tallest - would be - them when - the heights - were finally - measured.",
    "question": "Were the children lining up for lunch?",
    "correct_answer": "No"
  },
  {
    "item": 20,
    "condition": "specific_they",
    "sentence": "The children in the class were lined up to see who was the tallest. - The skinniest child - thought that - the one who - would be - the tallest - would be - them when - the heights - were finally - measured.",
    "question": "Were the children lining up for lunch?",
    "correct_answer": "No"
  },
  {
    "item": 20,
    "condition": "named_they",
    "sentence": "The children in the class were lined up to see who was the tallest. - Bryce - thought that - the one who - would be - the tallest - would be - them when - the heights - were finally - measured.",
    "question": "Were the children lining up for lunch?",
    "correct_answer": "No"
  },
  {
    "item": 20,
    "condition": "quantificational_he",
    "sentence": "The children in the class were lined up to see who was the tallest. - Every child - thought that - the one who - would be - the tallest - would be - him when - the heights - were finally - measured.",
    "question": "Were the children lining up for lunch?",
    "correct_answer": "No"
  },
  {
    "item": 20,
    "condition": "specific_he",
    "sentence": "The children in the class were lined up to see who was the tallest. - The skinniest child - thought that - the one who - would be - the tallest - would be - him when - the heights - were finally - measured.",
    "question": "Were the children lining up for lunch?",
    "correct_answer": "No"
  },
  {
    "item": 20,
    "condition": "named_he",
    "sentence": "The children in the class were lined up to see who was the tallest. - Bryce - thought that - the one who - would be - the tallest - would be - him when - the heights - were finally - measured.",
    "question": "Were the children lining up for lunch?",
    "correct_answer": "No"
  },
  {
    "item": 21,
    "condition": "filler",
    "sentence": "Ben was building a train set alone in the garage. - After finishing - the model - train set - from the - hobby shop's - Christmas sale, - he went - to the store - to buy - another one.",
    "question": "Was Ben building a train set?",
    "correct_answer": "Yes"
  },
  {
    "item": 22,
    "condition": "filler",
    "sentence": "John was studying alone in the bookstore. - After reading - the math - and science - textbooks - from the - school library, - he dreamed - about proving - an important - theorem.",
    "question": "Was John studying at school?",
    "correct_answer": "No"
  },
  {
    "item": 23,
    "condition": "filler",
    "sentence": "James was shopping alone in the clothing store. - While picking out - new clothes - to wear - on a - very important - job interview, - he tried - to get - help when - he got flustered.",
    "question": "Was James shopping for clothes?",
    "correct_answer": "Yes"
  },
  {
    "item": 24,
    "condition": "filler",
    "sentence": "Ken was walking alone on the pier. - After seeing - the ocean - for the - first time - while on - vacation, - he wished - to come back - when he - had a date.",
    "question": "Did Ken have a date?",
    "correct_answer": "No"
  },
  {
    "item": 25,
    "condition": "filler",
    "sentence": "Bill was camping alone in the woods. - Before - encountering - a bear - in the forest - on last year's - camping trip, - he refused - to carry - a weapon - with him.",
    "question": "Was Bill camping in the woods?",
    "correct_answer": "Yes"
  },
  {
    "item": 26,
    "condition": "filler",
    "sentence": "Bob was alone in the classroom, coloring. - While choosing - a crayon - color - to use - for the - next picture, - he refused - to pick - a bright color - for the flower.",
    "question": "Was Bob writing an essay?",
    "correct_answer": "No"
  },
  {
    "item": 27,
    "condition": "filler",
    "sentence": "Mark was alone in bed, snoring. - As usual, - before falling - asleep - in the camp - dorms - that night, - he refused - to apply - a nasal strip - to avoid snoring.",
    "question": "Was Mark at camp?",
    "correct_answer": "Yes"
  },
  {
    "item": 28,
    "condition": "filler",
    "sentence": "Frank was dieting alone at the camp. - After seeing - some chocolate - cake and - apple pie - in the kitchen - that night, - he chose - to finally - take a - cheat day.",
    "question": "Was Frank with his friends?",
    "correct_answer": "No"
  },
  {
    "item": 29,
    "condition": "filler",
    "sentence": "Joe was patrolling alone around the campus. - Before choosing - the route - around campus - to patrol - for the - evening, - he tried - to anticipate - potential dangers - that might occur.",
    "question": "Was Joe patrolling campus?",
    "correct_answer": "Yes"
  },
  {
    "item": 30,
    "condition": "filler",
    "sentence": "Connor was cooking alone in the restaurant. - While making - the restaurant's - famous - chili recipe - for the - food critic, - he decided - to experiment - with different - spices.",
    "question": "Was Connor cooking at home?",
    "correct_answer": "No"
  },
  {
    "item": 31,
    "condition": "filler",
    "sentence": "Mary was tanning alone at the beach. - Before - finally heading - back home - after getting - a bad - sunburn, - she wanted - to stop at - the gift shop - for some licorice.",
    "question": "Did Mary get a sunburn?",
    "correct_answer": "Yes"
  },
  {
    "item": 32,
    "condition": "filler",
    "sentence": "Sue was hunting alone in the forest. - After - an animal - walked past - quietly, - it was - startled away - when she - tripped - on a root - and fell down.",
    "question": "Did Sue stay silent?",
    "correct_answer": "No"
  },
  {
    "item": 33,
    "condition": "filler",
    "sentence": "Kate was in the studio alone, drawing. - The final - sketch - of the - week-  was not - yet finished - when she - realized there - was no more - time left in the session.",
    "question": "Was Kate drawing?",
    "correct_answer": "Yes"
  },
  {
    "item": 34,
    "condition": "filler",
    "sentence": "Emily was alone in the gallery, sculpting. - Hopeful that - a successful - career as - an artist - was still - attainable, - she hoped - to make good money - when the final - piece sold.",
    "question": "Did Emily want to be a lawyer?",
    "correct_answer": "No"
  },
  {
    "item": 35,
    "condition": "filler",
    "sentence": "Emma was skateboarding alone in the skate park. - After completing - a difficult - jump trick - in front - of the - fountain, - she desired - to complete - even more - complicated tricks.",
    "question": "Did Emma complete a difficult jump trick?",
    "correct_answer": "Yes"
  },
  {
    "item": 36,
    "condition": "filler",
    "sentence": "Olivia was shooting alone at the practice range. - There were - still many - targets - left to - try to - hit when - she had - finished taking - her last - shot.",
    "question": "Did Olivia hit all the targets?",
    "correct_answer": "No"
  },
  {
    "item": 37,
    "condition": "filler",
    "sentence": "Hannah was in the house alone, sneezing a lot. - All the - allergy medication - and nasal - spray seemed - to be missing - when she - looked for - something to - relieve her allergies.",
    "question": "Was Hannah sneezing?",
    "correct_answer": "Yes"
  },
  {
    "item": 38,
    "condition": "filler",
    "sentence": "Sarah was on the train alone, starving. - When approaching - the first - stop where - there was - a convenience - store, - she decided to - get a snack - when the - train stopped.",
    "question": "Was Sarah sleeping?",
    "correct_answer": "No"
  },
  {
    "item": 39,
    "condition": "filler",
    "sentence": "Natalie was birdwatching alone in the park. - Keeping a journal - to help document - and identify - the birds - seemed like a - smart idea - when she - saw how many - different types - there were.",
    "question": "Did Natalie see birds?",
    "correct_answer": "Yes"
  },
  {
    "item": 40,
    "condition": "filler",
    "sentence": "Linda was singing alone in the karaoke bar. - Before going up - to make - another attempt - at singing - another bad - country song, - she ordered - another drink - when the waitress - came by the table.",
    "question": "Did Linda order food?",
    "correct_answer": "No"
  },
  {
    "item": 41,
    "condition": "filler",
    "sentence": "Michael was drinking alone in the pub. - The new - liquor store - just down - the road - was already - closed - when they - realized they - wanted to get more - wine on the way home.",
    "question": "Did Michael drink at the pub?",
    "correct_answer": "Yes"
  },
  {
    "item": 42,
    "condition": "filler",
    "sentence": "David was sailing alone on the ocean. - Once finally - reaching land - after ten - days straight - at sea - all alone, - they expected - to be warmly - welcomed when - the ship docked.",
    "question": "Was David on a crowded cruise ship?",
    "correct_answer": "No"
  },
  {
    "item": 43,
    "condition": "filler",
    "sentence": "Richard was sleeping alone in the bedroom. - Dinner had - already been - served and - all the dishes - cleaned and - put away - when they - finally woke up - and realized they - were hungry.",
    "question": "Was Richard in the bedroom?",
    "correct_answer": "Yes"
  },
  {
    "item": 44,
    "condition": "filler",
    "sentence": "Robert was running alone on the track. - After finishing - the last - mile with - better time - than ever - before, - they chose to - take a break - when they noticed - how tired they were.",
    "question": "Was Robert running on the sidewalk?",
    "correct_answer": "No"
  },
  {
    "item": 45,
    "condition": "filler",
    "sentence": "Matthew was swimming alone in the pool. - It was - apparent that - the brand new - pair of goggles - did not - work well - when they - dove into the - pool and got - chlorine in their eyes.",
    "question": "Was Matthew wearing goggles?",
    "correct_answer": "Yes"
  },
  {
    "item": 46,
    "condition": "filler",
    "sentence": "Kimberly was gardening alone in the yard. - After planting - some daisies - and some - rose bushes - in the front - of the yard, - they attempted - to plant some - vegetables to harvest - later that year.",
    "question": "Did Kimberly plant pansies?",
    "correct_answer": "No"
  },
  {
    "item": 47,
    "condition": "filler",
    "sentence": "Nancy was lying alone in the hammock. - After loudly - falling out - of the - hammock - and onto - the ground, - they intended - to go inside - to finish - their nap.",
    "question": "Did Nancy fall out of the hammock?",
    "correct_answer": "Yes"
  },
  {
    "item": 48,
    "condition": "filler",
    "sentence": "Rachel was weightlifting alone in the weight room. - It was time - to start - doing stretches - before going - home for - the day, - when they - realized they had - managed to beat - their personal record.",
    "question": "Was Rachel running at the gym?",
    "correct_answer": "No"
  },
  {
    "item": 49,
    "condition": "filler",
    "sentence": "Jessica was figure skating alone at the ice rink. - After perfectly - completing - last year's - routine as - a warm up - that morning, - they failed to - do as well - with their - new routine.",
    "question": "Did Jessica warm up?",
    "correct_answer": "Yes"
  },
  {
    "item": 50,
    "condition": "filler",
    "sentence": "Julia was in the bedroom alone, panicking. - Even more - anxiety about - homework and - final exams - started to - set in - when they realized - how much more - they had left - to study.",
    "question": "Was Julia at school?",
    "correct_answer": "No"
  },
  {
    "item": 51,
    "condition": "filler",
    "sentence": "The current class was worried about the final exam. - Every person - who had - taken the - final exam - last year - and passed - said that - the next class - would definitely need - to study.",
    "question": "Did the class require a final exam?",
    "correct_answer": "Yes"
  },
  {
    "item": 52,
    "condition": "filler",
    "sentence": "A sales flyer was sent out before Black Friday. - Every customer - wanted to - get a price - adjustment - on last week's - purchases - when the - sales prices - were listed at - half off.",
    "question": "Was the store having a Memorial Day sale?",
    "correct_answer": "No"
  },
  {
    "item": 53,
    "condition": "filler",
    "sentence": "Some participants found the marathon more challenging than others. - Every inexperienced - runner in - the marathon - was extremely - exhausted - and dehydrated - when only - half of - the race - was completed.",
    "question": "Were the inexperienced runners tired?",
    "correct_answer": "Yes"
  },
  {
    "item": 54,
    "condition": "filler",
    "sentence": "No parent wanted to pay for the field trip fees. - Every parent - expected that - the field trips - would be - less expensive - when the - teacher said that - the class - would get - a discount.",
    "question": "Was the field trip cheap?",
    "correct_answer": "No"
  },
  {
    "item": 55,
    "condition": "filler",
    "sentence": "The airline was not known for providing tasty meals. - Every traveler - on the - plane was - very unhappy - with the - food selection - when it - was finally - time for - dinner.",
    "question": "Was the airplane food bad?",
    "correct_answer": "Yes"
  },
  {
    "item": 56,
    "condition": "filler",
    "sentence": "It was the last debate of the election season. - The first - few candidates - to speak - during the - political debate - that evening - presented plans - to raise taxes - to spend more - on transit services.",
    "question": "Was it the first debate of the election season?",
    "correct_answer": "No"
  },
  {
    "item": 57,
    "condition": "filler",
    "sentence": "The country club had recently raised its membership fees. - The new - members at - the elite - country club - were extremely - surprised - when the - increased - membership fees - were charged.",
    "question": "Were the membership fees changed?",
    "correct_answer": "Yes"
  },
  {
    "item": 58,
    "condition": "filler",
    "sentence": "The class seemed to always get unruly in the late afternoon. - The smartest - pupils in - the classroom - had trouble - focusing on - school work - when the - other classes - were on - afternoon recess.",
    "question": "Did the smartest students stay focused?",
    "correct_answer": "No"
  },
  {
    "item": 59,
    "condition": "filler",
    "sentence": "As the children got older, it became harder for the whole family to schedule time off together. - The younger - cousins did - not want - to go on - the family - camping trip - when the - parents said that - the older cousins - would not be there.",
    "question": "Would the older cousins be at the family camping trip?",
    "correct_answer": "No"
  },
  {
    "item": 60,
    "condition": "filler",
    "sentence": "The hospital was usually short-staffed. - The elderly - patients in - the hospital - often - got quite - demanding - when it - seemed that - the nurses - were neglecting them.",
    "question": "Were the elderly patients demanding?",
    "correct_answer": "Yes"
  }
];
