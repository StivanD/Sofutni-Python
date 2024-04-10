async function lockedProfile() {
    const baseUrl = "http://localhost:3030/jsonstore/advanced/profiles";

    async function getUserData() {
        const response = await fetch(baseUrl);
        return await response.json();
    }

    const userData = await getUserData();
    const mainElement = document.getElementById("main");

    Object.values(userData).forEach((user) => {
        const userCard = document.createElement("div");
        userCard.id = user._id;
        userCard.classList.add("profile");

        const userIcon = document.createElement("img");
        userIcon.src = "./iconProfile2.png";
        userIcon.classList.add("userIcon");
        userCard.appendChild(userIcon);

        const lockLabel = document.createElement("label");
        lockLabel.textContent = "Lock";
        userCard.appendChild(lockLabel);

        const lockRadio = document.createElement("input");
        lockRadio.type = "radio";
        lockRadio.name = `${user.username}Locked`;
        lockRadio.value = "lock";
        lockRadio.checked = true;
        userCard.appendChild(lockRadio);

        const unlockLabel = document.createElement("label");
        unlockLabel.textContent = "Unlock";
        userCard.appendChild(unlockLabel);

        const unlockRadio = document.createElement("input");
        unlockRadio.type = "radio";
        unlockRadio.name = `${user.username}Locked`;
        unlockRadio.value = "unlock";
        userCard.appendChild(unlockRadio);

        const hr = document.createElement("hr");
        userCard.appendChild(hr);

        const usernameLabel = document.createElement("label");
        usernameLabel.textContent = "Username";
        userCard.appendChild(usernameLabel);

        const usernameInput = document.createElement("input");
        usernameInput.type = "text";
        usernameInput.name = "user1Username";
        usernameInput.value = user.username;
        usernameInput.disabled = true;
        usernameInput.readOnly = true;
        userCard.appendChild(usernameInput);

        const moreInfoDiv = document.createElement("div");
        moreInfoDiv.classList.add("more-info");
        moreInfoDiv.hidden = true;

        const moreInfoHr = document.createElement("hr");
        moreInfoDiv.appendChild(moreInfoHr);

        const emailLabel = document.createElement("label");
        emailLabel.textContent = "Email:";
        moreInfoDiv.appendChild(emailLabel);

        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.name = "user1Email";
        emailInput.value = user.email;
        emailInput.disabled = true;
        emailInput.readOnly = true;
        moreInfoDiv.appendChild(emailInput);

        const ageLabel = document.createElement("label");
        ageLabel.textContent = "Age:";
        moreInfoDiv.appendChild(ageLabel);

        const ageInput = document.createElement("input");
        ageInput.type = "email";
        ageInput.name = "user1Age";
        ageInput.value = user.age;
        ageInput.disabled = true;
        ageInput.readOnly = true;
        moreInfoDiv.appendChild(ageInput);

        userCard.appendChild(moreInfoDiv);

        const showMoreButton = document.createElement("button");
        showMoreButton.textContent = "Show more";
        userCard.appendChild(showMoreButton);

        showMoreButton.addEventListener("click", () => {
            if (lockRadio.checked) return;
            if (unlockRadio.checked) {
                moreInfoDiv.hidden = !moreInfoDiv.hidden;
                showMoreButton.textContent = moreInfoDiv.hidden ? "Show more" : "Hide it";
            }
        });

        mainElement.appendChild(userCard);
    });
}

window.onload = lockedProfile;
