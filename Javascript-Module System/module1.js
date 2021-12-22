const tables = () => {

    new gridjs.Grid({
        columns: ["Name", "Email", "Phone Number"],
        data: [
          ["John", "john@example.com", "(353) 01 222 3333"],
          ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
          ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
          ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
          ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
        ],   pagination: {
            enabled: true,
            limit: 2,
            summary: false },
            sort:true,
            search:{
                enabled:true
            },
            language: {
              'search': {
                'placeholder': '🔍 Search...'
              },
              'pagination': {
                'previous': '⬅️',
                'next': '➡️',
                'showing': '😃 Displaying',
                'results': () => 'Records'
              }
            }
      }).render(document.getElementById("wrapper"));
    
     
}
export default tables;