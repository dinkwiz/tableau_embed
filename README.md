# Tableau Embedding Project

## Aim:
To display interactive Tableau dashboards on your own website.

## What you will need:
A text editor
A Tableau Public Profile (with a dashboard you want to display)
(Optional) Somewhere to publish your page. Here I use a GitHub account.
Quick Start Guide
The code needed to publish a Tableau Public Dashboard is available on GitHub. This code includes a title and buttons to download your viz as a pdf or image.

## Create your own copies of the files

1. Go to this GitHub link: https://github.com/dinkwiz/tableau_embed
2. Open the index.html file.
3. Highlight and copy the code.
4. Open a new NotePad file.
5. Paste the code.
6. Save the file as index.html (no need to select a file extention. NotePad will recognise .html)
7. Repeat steps 2 – 5 with the app.js file. Save this file as app.js
8. Edit index.html

## Make changes to the html file.

You will need to make two changes to the index.html file. This can be completed within NotePad. Row 4 and Row 14 include the text Add Title Here. Do as it suggests and change this text to a relevant title for you viz.

## Edit app.js

You will need to make two changes to the app.js file. This can be completed within NotePad.

In your browser, go to the Tableau Public Dashboard you want to display. At the bottom of this viz, in the right hand corner there will be a share symbol. Click this and copy the link provided.

Paste this link into your app.js NotePad file in Row 6 (Const url = …). Replace the link in the speech marks with your link.

## Create a new GitHub repository (repo)

Drag and drop your index.html and app.js files into the repo.

## Set up GitHub Pages so you can view your page

Within the repo, go to Settings (the last tab) and Options (this is top of the list so should be open automatically). Scroll down to Git Hub Pages. Select Master Branch from the drop down. This creates a web address to view your repo. The address appears in green above the GitHub Pages Section within settings.

## Tweaks and Changes

The size of your dashboard might not be correct when you view the page. You can make changes to this in the app.js file. Make changes to the height and width values in Rows 11 and 12 on GitHub.

[You can edit GitHub pages using the edit icon (pencil). Once you have made changes you will need to Commit these and then reload the web page to see how it looks.]

## Resources
If you want to learn more about Embedding Tableau Dashboards:

Tableau: Embedding Dashboards – Next Steps (coming soon)
Andre de Vries from the Information Lab has a brilliant series of videos on Embedding Dashboards.
View Tableau’s Embedded Analytics Playbook and information on the Tableau Javascript API


## thoughts, notes and randomness

To view the webpage created as part of this Tableau Embedding Project go to: 
https://dinkwiz.github.io/tableau_embed/
