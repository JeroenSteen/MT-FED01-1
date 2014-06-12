#Concept eindopdracht MT-FED01-1

Mijn concept is om een app te maken waarmee ik code snippets kan toevoegen.
Bij het toevoegen van deze code snippets is het mogelijk programmeertalen te kiezen.

Een code snippet is in die zin een object met de volgende attributen:
- Name				= Naam van de snippet									(String)
- Raw				= Volledige code snippet met format; tabs ect.			(String)
- Langs				= Programmeertalen die gebruikt zijn bij snippet		(Array)
- Freelance			= Freelance oftewel vrij werk of in opdracht gemaakt	(Boolean)	

Bij het aangeven dat de snippet gemaakt is voor een project in opdracht
is het mogelijk om de volgende attributen aan te geven:
- Project			= Naam van het project									(String)
- Website			= Webadres waar het project is terug te vinden			(String)

Het is mogelijk om bij een project een opdrachtgever toe te kennen,
met de volgende attributen:
- Client			= Naam van de opdrachtgever								(String)
- Company			= Naam van het bedrijf									(String)
- Email				= E-mail adres van opdrachtgever						(String)
- Website			= Webadres van de opdrachtgever, niet perse van project	(String)
