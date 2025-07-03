

class Point
{// To answer region 6
    public int X;
    public int Y;
}

class Program
{
    static void Main()
    {
        #region 1. Enter a number then print it
        Console.WriteLine("Region 1");
        Console.Write("Enter a number: ");
        int num = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("You entered: " + num);
        #endregion
        #region 2. converts a string to an integer, but the string contains non-numeric characters. And mention what will happen 
        Console.WriteLine("Region 2");

        string input = "1aq12c";
        int res2;

        Console.WriteLine(int.TryParse(input, out res2) ? $"Converted: {res2}" : "Invalid number");
        // i prefer use try and catch because there is error
        // System.FormatException
        #endregion
        #region 3 Write C# program that Perform a simple arithmetic operation with floating-point numbers And mention what will happen
        Console.WriteLine("Region 3");
        float num1 = 2f;
        float num2 = 1.0f;
        Console.WriteLine(num1/num2);
        #endregion
        #region 4.Write C# program that Extract a substring from a given string.
        Console.WriteLine("Region 4");

        string char1 = "Amr Mohamed";
        string subchar1 = char1.Substring(1, 2);
        Console.WriteLine(subchar1);
        #endregion
        #region 5 Write C# program that Assigning one value type variable to another and modifying the value of one variable and mention what will happen
        Console.WriteLine("Region 5:");

        string caracter2 = "amr";
        string modifychar2 = caracter2;
        modifychar2 = "mohamed";
        Console.WriteLine(caracter2); // amr
        Console.WriteLine(modifychar2); // mohamed
        #endregion
        #region 6 Write C# program that Assigning one reference type variable to another and modifying the object through one variable and mention what will happen
        Console.WriteLine("Region 6:");
        Point p1 = new Point();
        Point p2 = new Point();
        p2 = p1;
        p1.X = 9;
        Console.WriteLine(p2.X);
        #endregion
        #region 7 Write C# program that take two string variables and print them as one variable
        Console.WriteLine("Region 7:");
        string fname = "Amr";
        string lname = "Mohamed";
        string fullName = fname +" "+ lname; 
        Console.WriteLine("Full name: " + fullName);
        #endregion
        #region 8 Which of the following statements is correct about the C#.NET code snippet given below?
        Console.WriteLine("Region 8:");
        int d;
        d = Convert.ToInt32(!(30 < 20));
        Console.WriteLine(d); //True because 20 not greater than 30 ==> fale(0) but there is not then the final res is true(1)
        #endregion
        #region 9 Which of the following is the correct output for the C# code given below?
        Console.WriteLine("Region 9:");
        Console.WriteLine(13 / 2 + " " + 13 % 2); // 6 1
                                                  // in js 6.5 1
        #endregion
        #region 10 
        Console.WriteLine("Region 10:");

        int num3 = 1, z = 5;


        if (!(num3 <= 0)) // True
            Console.WriteLine(++num3 + z++ + " " + ++z);
        // 7 7
        else
            Console.WriteLine(--num3 + z-- + " " + --z);
        #endregion
    }
}
