document.addEventListener('DOMContentLoaded', function() {
    const guestForm = document.getElementById('guest-form');
    const guestNameInput = document.getElementById('guest-name');
    const guestList = document.getElementById('guest-list');
    const guestCount = document.getElementById('guest-count');
            
    guestForm.addEventListener('submit', function(hello) {
        hello.preventDefault();
        const name = guestNameInput.value.trim();
                
        if (name) {
            // Check if we've reached the limit
            if (guestList.children.length >= 10) {
                alert('Guest list is full(maximum 10 guests)');
                return;
                }
            //Else do this
            addGuest(name);
            guestNameInput.value = '';
            updateGuestCount();
                }
            });
    
    //function to add guests
    function addGuest(name) {
        //li 
        const li = document.createElement('li');
        li.className = 'guest-item';
        //span
        const nameSpan = document.createElement('span');
        nameSpan.className = 'guest-name';
        nameSpan.textContent = name;
        
        //Adding the rsvp button to show if guests are attending or not
        const rsvpBtn = document.createElement('button');
        rsvpBtn.className = 'rsvp-btn';
        rsvpBtn.textContent = 'Attendingg';
        rsvpBtn.addEventListener('click', function() {
            nameSpan.classList.toggle('not-attending');
            rsvpBtn.textContent = nameSpan.classList.contains('not-attending') 
                ? 'Not Attending' 
                : 'Attending';
            });
                
        //Adding the remove button to remove guests
        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
                li.remove();
                updateGuestCount();
            });
        
        const timeAdded = document.createElement('button');
        timeAdded.className = 'time-added';
        timeAdded.textContent = 'Added at '
        timeAdded.addEventListener('click', function(){
            console.log("hi")
        })

        li.appendChild(nameSpan);
        li.appendChild(rsvpBtn);
        li.appendChild(removeBtn);
                
        guestList.appendChild(li);
            }
        
        //Update the counter
        function updateGuestCount() {
            guestCount.textContent = guestList.children.length;
        }
    });