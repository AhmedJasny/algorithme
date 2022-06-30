Variable Bla en Caractère
Variables Nb, i en Entier
Debut
Ecrire "Entrez une phrase : "
Lire Bla
Nb ← 0
Pour i ← 1 à Len(Bla)
  Si Mid(Bla, i , 1) = " " Alors
    Nb ← Nb + 1
  FinSi
i suivant
Ecrire "Cette phrase compte ", Nb + 1, " mots"
Fin
