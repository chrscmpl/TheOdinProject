## **How do you create a new repository on GitHub?**

Using the GUI, first click new, insert a name, and optionally insert a description, choose between a public and private repository, add a README, .gitignore, and license.

---

## **How do you copy a repository onto your local machine from GitHub?**

Using `git clone` whose argument needs to be an HTTP link to a repository or an SSH key.

---

## **What is the default name of your remote connection?**

Origin.

---

## **Explain what origin is in git push origin main.**

The name of the remote repository.

---

## **Explain what main is in git push origin main.**

The name of the branch I want to push the committed changes to.

---

## **Explain the two-stage system that Git uses to save files.**

After making a change, you first have to `git add` that modified file to the Staging Area, and then you can `git commit` all of the staged changes.

---

## **How do you check the status of your current repository?**

`git status`

---

## **How do you add files to the staging area in git?**

`git add *arg*` where arg is the name of the file to add to the staging area
or
`git add .` when in the main directory of the repository to stage all the changes.

---

## **How do you commit the files in the staging area and add a descriptive message?**

`git commit -m "message"`

---

## **How do you push your changes to your repository on GitHub?**

`git push`
or
`git push origin main` where main can be replaced if working with multiple branches.

---

## **How do you look at the history of your previous commits?**

`git log`
