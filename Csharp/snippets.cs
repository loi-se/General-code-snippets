
        // -----------------------1. Control structures

        //----------- If else

        // Change the values of these variables to test the results.
        bool Condition1 = true;
        bool Condition2 = true;
        bool Condition3 = true;
        bool Condition4 = true;

        if (Condition1)
        {
            // Condition1 is true.
        }
        else if (Condition2)
        {
            // Condition1 is false and Condition2 is true.
        }
        else if (Condition3)
        {
            if (Condition4)
            {
                // Condition1 and Condition2 are false. Condition3 and Condition4 are true.
            }
            else
            {
                // Condition1, Condition2, and Condition4 are false. Condition3 is true.
            }
        }
        else
        {
            // Condition1, Condition2, and Condition3 are false.
        }

        //------------------------Operators:
        int a = 8;
        int b = 9;
        
        // If values are not equal:
        if (a != b)
        {
                
        }
        // Equal or not:
        else if (a == b)
        {
        // Or operator
        }
        else if (a == b || a > b)
        {
        // And operator   
        }
        else if (a == b && b > a)
        {
                
        }

        Boolean value;
        
        //false:
        if (!value)
        {            
        }
        //false:
        else if (value == false)
        {
        }
        

        //------------- While loop
        int sum = 0;
        int i = 0;
        while (i < 5)
        {
            sum += i;
            i++;
        }

        //-----------do while loop
        int sum = 0;
        int i = 0;
        do
        {
            sum += i;
            i++;
        } while (i < 5);

        //-------------for loop
        for (int i = 1; i <= 5; i++)
        {
            Console.WriteLine(i);
        }

        //-------------for each loop
        int[] fibarray = new int[] { 0, 1, 1, 2, 3, 5, 8, 13 };
        foreach (int element in fibarray)
        {
            System.Console.WriteLine(element);
        }

        //--------------Switch
        int caseSwitch = 1;
        switch (caseSwitch)
        {
            case 1:
                Console.WriteLine("Case 1");
                break;
            case 2:
                Console.WriteLine("Case 2");
                break;
            default:
                Console.WriteLine("Default case");
                break;
        }

        //--------------With


        //-------------------------------- 2. Data Structures:

        // -----------Array
        int[] numbers = new int[5] { 1, 2, 3, 4, 5 };
        string[] names = new string[3] { "Matt", "Joanne", "Robert" };

        // -----------Multi dimenional Array:

        int[,] numbers = new int[3, 2] { { 1, 2 }, { 3, 4 }, { 5, 6 } };
        string[,] siblings = new string[2, 2] { { "Mike", "Amy" }, { "Mary", "Albert" } };

        // --------Accessing Array members:
        int[] numbers = { 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 };
        numbers[4] = 5;

        int[,] numbers = { { 1, 2 }, { 3, 4 }, { 5, 6 }, { 7, 8 }, { 9, 10 } };
        numbers[1, 1] = 5;
        // add value

        //-----------ArrayList:
        int i = 0;
        ArrayList ItemList = new ArrayList();
        ItemList.Add("Item4");
        ItemList.Add("Item5");
        ItemList.Add("Item2");
        ItemList.Add("Item1");
        ItemList.Add("Item3");
        MessageBox.Show("Shows Added Items");
        for (i = 0; i < = ItemList.Count - 1; i++)
        {
            MessageBox.Show(ItemList[i].ToString());
        }
        //insert an item 
        ItemList.Insert(3, "Item6");
        //sort itemms in an arraylist 
        ItemList.Sort();
        //remove an item 
        ItemList.Remove("Item1");
        //remove item from a specified index 
        ItemList.RemoveAt(3);
        MessageBox.Show("Shows final Items the ArrayList");
        for (i = 0; i < = ItemList.Count - 1; i++)
        {
            MessageBox.Show(ItemList[i].ToString());
        }

        // ------------Hashtable:
        Hashtable weeks = new Hashtable();
        weeks.Add("1", "SunDay");
        weeks.Add("2", "MonDay");
        weeks.Add("3", "TueDay");
        weeks.Add("4", "WedDay");
        weeks.Add("5", "ThuDay");
        weeks.Add("6", "FriDay");
        weeks.Add("7", "SatDay");
        //Display a single Item 

        MessageBox.Show(weeks["5"].ToString());
        //Search an Item 
        if (weeks.ContainsValue("TueDay"))
        {
            MessageBox.Show("Find");
        }
        else
        {
            MessageBox.Show("Not find");
        }
        //remove an Item 
        weeks.Remove("3");
        //Display all key value pairs
        foreach (DictionaryEntry day in weeks)
        {
            MessageBox.Show(day.Key + "   -   " + day.Value);
        }


        //--------Dictionairy
        Dictionary<string, int> dict = new Dictionary<string, int>();
        dict.Add("one", 1);
        dict.Add("two", 2);
        dict.Add("three", 3);
        dict.Add("four", 4);

        //---------- Stack
        Stack days = new Stack();
        days.Push("SunDay");
        days.Push("MonDay");
        days.Push("TueDay");
        days.Push("WedDay");
        days.Push("ThuDay");
        days.Push("FriDay");
        days.Push("SaturDay");
        if (days.Count == 7)
        {
            MessageBox.Show(days.Pop().ToString());
        }
        else
        {
            MessageBox.Show("SaturDay does not exist");
        }

        //---------- Queue
        Queue days = new Queue();
        days.Enqueue("Sunday");
        days.Enqueue("Monday");
        days.Enqueue("Tuesday");
        days.Enqueue("Wednsday");
        days.Enqueue("Thursday");
        days.Enqueue("Friday");
        days.Enqueue("Saturday");

        MessageBox.Show(days.Dequeue().ToString());

        if (days.Contains("Monday"))
        {
            MessageBox.Show("The queue contains Monday");
        }
        else
        {
            MessageBox.Show("Does not match any entries");
        }


        //--------------List
        List<int> iList = new List<int>();
        iList.Add(2);
        iList.Add(3);
        iList.Add(5);
        iList.Add(7);



        // Iterate trough it:


        // Build a HTML dropdownbox with C#:
        string html = "";
        html += "<select name='" + name + "' style='width: 100%'>";
        html += "<option value='5'" + (value == 5 || toonUitgebreidePrintopties ? " selected" : "") + ">8 weken</option>";
        html += "<option value='4'" + (value == 3 && !toonUitgebreidePrintopties ? " selected" : "") + disabled + ">12 weken" + nb + "</option>";
        html += "<option value='3'" + (value == 3 && !toonUitgebreidePrintopties ? " selected" : "") + disabled + ">18 weken" + nb + "</option>";
        html += "<option value='2'" + (value == 2 && !toonUitgebreidePrintopties ? " selected" : "") + disabled + ">28 weken" + nb + "</option>";
        html += "<option value='1'" + (value == 1 && !toonUitgebreidePrintopties ? " selected" : "") + disabled + ">38 weken" + nb + "</option>";
        html += "<option value='6'" + (value == 6 && !toonUitgebreidePrintopties ? " selected" : "") + disabled + ">50 weken" + nb + "</option>";
        html += "</select>";
        return html;


       // -----------------------3. Methods:

       // Anyone can call me
        public int SomeMethod() { return 1; } 

        // Only classes in the same assembly (project) can call me
        internal int SomeMethod() { return 1; } 

        // I can only be called from within the same class
        private int SomeMethod() { return 1; }

        // I can only be called from within the same class, or child classes
        protected int SomeMethod() { return 1; }



        public void SomeMethod() 
        { 
         /* I don't need to return anything */ 
        }


        public int SomeMethod() 
        { 
          int x = 5;      
          return x;
         /* I return something */ 
        }


        // -------------------------- 4. Regular Expressions:

        Regex regex = new Regex(@"\d+");
        Match match = regex.Match("Dot 55 Perls");
        if (match.Success)
        {
           string wholeString = match.Groups[0];
           string firstPartOfString = match.Groups[1];
           string secondPartOfString = match.Groups[2];
        }


        


