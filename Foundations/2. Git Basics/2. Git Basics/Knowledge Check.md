## **How do you create a new repository on GitHub?**

Using the GUI, first click new, insert a name, and optionally you can insert a description, choose between a public and private repository, add a README, .gitignore, and license.

---

## **How do you copy a repository onto your local machine from GitHub?**

Using _git clone_ whose argument needs to be an HTTP link to a repository or an SSH key.

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

After making a change, you first have to _git add_ that modified file to the Staging Area, and then you can _git commit_ all of the staged changes.

---

## **How do you check the status of your current repository?**\

_git status_

---

## **How do you add files to the staging area in git?**

_git add arg_ where arg is the name of the file to add to the staging area
or
_git add ._ when in the main directory of the repository to stage all the changes.

---

## **How do you commit the files in the staging area and add a descriptive message?**

_git commit -m "message"_

---

## **How do you push your changes to your repository on GitHub?**

_git push_
or
_git push origin main_ where main can be replaced if working with multiple branches.

---

## **How do you look at the history of your previous commits?**

_git log_
