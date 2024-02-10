using Avalonia.Controls;
using CSE231_PrepTest_Avalonia.ViewModels;

namespace CSE231_PrepTest_Avalonia.Views
{
    public partial class MainView : UserControl
    {
        public MainView()
        {
            InitializeComponent();
            DataContext = new MainViewModel();
        }
    }
}