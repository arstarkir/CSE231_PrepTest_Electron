using System.Collections.Generic;
using System.Collections.ObjectModel;
using System;
using System.Windows.Input;
using System.IO;

namespace CSE231_PrepTest_Avalonia.ViewModels
{
    public class MainViewModel : ViewModelBase
    {
        public ObservableCollection<Person> person { get; set; }

        public MainViewModel()
        {
            var people = new List<Person>
            {
                new Person("Neil", "Armstrong"),
                new Person("Buzz", "Lightyear"),
                new Person("James", "Kirk")
            };
            person = new ObservableCollection<Person>(people);
        }
        //Question + Test info
        List<TestInfo> tests = new List<TestInfo>();
        TestInfo curTest = null;
        Question curQ = null;
        public void FileAddToTests(string file, string fileContent)
        {
            TestInfo tempTest = new TestInfo();
            try
            {
                tempTest.DissectTest(file, fileContent);
                tests.Add(tempTest);
                //updateTable();
            }
            catch
            {

            }
        }
    }

    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public Person(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }
    }
}
