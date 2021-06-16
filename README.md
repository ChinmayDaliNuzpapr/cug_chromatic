# CUG

# How to install

```
cd cug_app
npm install
npm run dev
```

${match} ---> question_id
${lookup} ---> collection_comment
{
from: collection_of_comment
foreign:question_Id
}

<!-- DO not pick up the disabled comment -->

{
$project: {$if{$disable:true}}
}

CRUD
|----> Question
Read----> Category
|-----> Answers
|-----> Comments

Search
Sorting
|---------> Trending ---> Latest+Likes
|---------> Date
|---------> Likes
|---------> Views
