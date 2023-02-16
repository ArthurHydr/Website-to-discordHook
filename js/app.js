function sendMessage() {
      const uname = document.getElementById("uname").value
      const uquest = document.getElementById("uquest").value
      
      const request = new XMLHttpRequest()
      request.open("POST", "URL-WEBHOOK")
      request.setRequestHeader('Content-type', 'application/json')
        
      const myEmbed = {
          author: {
              name: "~ArthurOttoni"
          },
          title: `${uname}'s Question!`,
          description: `${uquest}`,
          color: hexToDecimal("#ff0000")

      }
       const params = {
         username: 'QuestionsBot',
         embeds: [ myEmbed ]
      }

      request.send(JSON.stringify(params))
    }

    function hexToDecimal(hex) {
      return parseInt(hex.replace("#",""), 16)
    }
