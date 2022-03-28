export type IconsId =
  | "about"
  | "add"
  | "allCategories"
  | "cheatsheet"
  | "close"
  | "code"
  | "comment"
  | "created"
  | "cute"
  | "dashboard"
  | "delete"
  | "description"
  | "diff"
  | "doing"
  | "done"
  | "down"
  | "edit"
  | "email"
  | "end"
  | "facebook"
  | "filter"
  | "fire"
  | "focus_modal"
  | "friends"
  | "gem"
  | "gmail"
  | "hashtag"
  | "heart"
  | "highDiff"
  | "highImp"
  | "highlighter"
  | "highUse"
  | "hypothesis"
  | "imp"
  | "inbox"
  | "info"
  | "kanban"
  | "key_info"
  | "link"
  | "linkedin"
  | "login"
  | "logout"
  | "lowDiff"
  | "lowImp"
  | "lowUse"
  | "markDone"
  | "medDiff"
  | "medImp"
  | "medUse"
  | "music"
  | "name"
  | "nerd"
  | "next"
  | "notes"
  | "notifyOff"
  | "notifyOn"
  | "password"
  | "pause"
  | "pay"
  | "plan"
  | "play"
  | "previous"
  | "private"
  | "problem"
  | "professional"
  | "profile"
  | "public"
  | "quote"
  | "save"
  | "search"
  | "seconds"
  | "send"
  | "settings"
  | "showDropdown"
  | "sort"
  | "sort2"
  | "spotify"
  | "status"
  | "structure"
  | "table"
  | "tag"
  | "title"
  | "todo"
  | "up"
  | "use"
  | "warning"
  | "whatactuallyis"
  | "whatshouldbe";

export type IconsKey =
  | "About"
  | "Add"
  | "AllCategories"
  | "Cheatsheet"
  | "Close"
  | "Code"
  | "Comment"
  | "Created"
  | "Cute"
  | "Dashboard"
  | "Delete"
  | "Description"
  | "Diff"
  | "Doing"
  | "Done"
  | "Down"
  | "Edit"
  | "Email"
  | "End"
  | "Facebook"
  | "Filter"
  | "Fire"
  | "FocusModal"
  | "Friends"
  | "Gem"
  | "Gmail"
  | "Hashtag"
  | "Heart"
  | "HighDiff"
  | "HighImp"
  | "Highlighter"
  | "HighUse"
  | "Hypothesis"
  | "Imp"
  | "Inbox"
  | "Info"
  | "Kanban"
  | "KeyInfo"
  | "Link"
  | "Linkedin"
  | "Login"
  | "Logout"
  | "LowDiff"
  | "LowImp"
  | "LowUse"
  | "MarkDone"
  | "MedDiff"
  | "MedImp"
  | "MedUse"
  | "Music"
  | "Name"
  | "Nerd"
  | "Next"
  | "Notes"
  | "NotifyOff"
  | "NotifyOn"
  | "Password"
  | "Pause"
  | "Pay"
  | "Plan"
  | "Play"
  | "Previous"
  | "Private"
  | "Problem"
  | "Professional"
  | "Profile"
  | "Public"
  | "Quote"
  | "Save"
  | "Search"
  | "Seconds"
  | "Send"
  | "Settings"
  | "ShowDropdown"
  | "Sort"
  | "Sort2"
  | "Spotify"
  | "Status"
  | "Structure"
  | "Table"
  | "Tag"
  | "Title"
  | "Todo"
  | "Up"
  | "Use"
  | "Warning"
  | "Whatactuallyis"
  | "Whatshouldbe";

export enum Icons {
  About = "about",
  Add = "add",
  AllCategories = "allCategories",
  Cheatsheet = "cheatsheet",
  Close = "close",
  Code = "code",
  Comment = "comment",
  Created = "created",
  Cute = "cute",
  Dashboard = "dashboard",
  Delete = "delete",
  Description = "description",
  Diff = "diff",
  Doing = "doing",
  Done = "done",
  Down = "down",
  Edit = "edit",
  Email = "email",
  End = "end",
  Facebook = "facebook",
  Filter = "filter",
  Fire = "fire",
  FocusModal = "focus_modal",
  Friends = "friends",
  Gem = "gem",
  Gmail = "gmail",
  Hashtag = "hashtag",
  Heart = "heart",
  HighDiff = "highDiff",
  HighImp = "highImp",
  Highlighter = "highlighter",
  HighUse = "highUse",
  Hypothesis = "hypothesis",
  Imp = "imp",
  Inbox = "inbox",
  Info = "info",
  Kanban = "kanban",
  KeyInfo = "key_info",
  Link = "link",
  Linkedin = "linkedin",
  Login = "login",
  Logout = "logout",
  LowDiff = "lowDiff",
  LowImp = "lowImp",
  LowUse = "lowUse",
  MarkDone = "markDone",
  MedDiff = "medDiff",
  MedImp = "medImp",
  MedUse = "medUse",
  Music = "music",
  Name = "name",
  Nerd = "nerd",
  Next = "next",
  Notes = "notes",
  NotifyOff = "notifyOff",
  NotifyOn = "notifyOn",
  Password = "password",
  Pause = "pause",
  Pay = "pay",
  Plan = "plan",
  Play = "play",
  Previous = "previous",
  Private = "private",
  Problem = "problem",
  Professional = "professional",
  Profile = "profile",
  Public = "public",
  Quote = "quote",
  Save = "save",
  Search = "search",
  Seconds = "seconds",
  Send = "send",
  Settings = "settings",
  ShowDropdown = "showDropdown",
  Sort = "sort",
  Sort2 = "sort2",
  Spotify = "spotify",
  Status = "status",
  Structure = "structure",
  Table = "table",
  Tag = "tag",
  Title = "title",
  Todo = "todo",
  Up = "up",
  Use = "use",
  Warning = "warning",
  Whatactuallyis = "whatactuallyis",
  Whatshouldbe = "whatshouldbe",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.About]: "61697",
  [Icons.Add]: "61698",
  [Icons.AllCategories]: "61699",
  [Icons.Cheatsheet]: "61700",
  [Icons.Close]: "61701",
  [Icons.Code]: "61702",
  [Icons.Comment]: "61703",
  [Icons.Created]: "61704",
  [Icons.Cute]: "61705",
  [Icons.Dashboard]: "61706",
  [Icons.Delete]: "61707",
  [Icons.Description]: "61708",
  [Icons.Diff]: "61709",
  [Icons.Doing]: "61710",
  [Icons.Done]: "61711",
  [Icons.Down]: "61712",
  [Icons.Edit]: "61713",
  [Icons.Email]: "61714",
  [Icons.End]: "61715",
  [Icons.Facebook]: "61716",
  [Icons.Filter]: "61717",
  [Icons.Fire]: "61718",
  [Icons.FocusModal]: "61719",
  [Icons.Friends]: "61720",
  [Icons.Gem]: "61721",
  [Icons.Gmail]: "61722",
  [Icons.Hashtag]: "61723",
  [Icons.Heart]: "61724",
  [Icons.HighDiff]: "61725",
  [Icons.HighImp]: "61726",
  [Icons.Highlighter]: "61727",
  [Icons.HighUse]: "61728",
  [Icons.Hypothesis]: "61729",
  [Icons.Imp]: "61730",
  [Icons.Inbox]: "61731",
  [Icons.Info]: "61732",
  [Icons.Kanban]: "61733",
  [Icons.KeyInfo]: "61734",
  [Icons.Link]: "61735",
  [Icons.Linkedin]: "61736",
  [Icons.Login]: "61737",
  [Icons.Logout]: "61738",
  [Icons.LowDiff]: "61739",
  [Icons.LowImp]: "61740",
  [Icons.LowUse]: "61741",
  [Icons.MarkDone]: "61742",
  [Icons.MedDiff]: "61743",
  [Icons.MedImp]: "61744",
  [Icons.MedUse]: "61745",
  [Icons.Music]: "61746",
  [Icons.Name]: "61747",
  [Icons.Nerd]: "61748",
  [Icons.Next]: "61749",
  [Icons.Notes]: "61750",
  [Icons.NotifyOff]: "61751",
  [Icons.NotifyOn]: "61752",
  [Icons.Password]: "61753",
  [Icons.Pause]: "61754",
  [Icons.Pay]: "61755",
  [Icons.Plan]: "61756",
  [Icons.Play]: "61757",
  [Icons.Previous]: "61758",
  [Icons.Private]: "61759",
  [Icons.Problem]: "61760",
  [Icons.Professional]: "61761",
  [Icons.Profile]: "61762",
  [Icons.Public]: "61763",
  [Icons.Quote]: "61764",
  [Icons.Save]: "61765",
  [Icons.Search]: "61766",
  [Icons.Seconds]: "61767",
  [Icons.Send]: "61768",
  [Icons.Settings]: "61769",
  [Icons.ShowDropdown]: "61770",
  [Icons.Sort]: "61771",
  [Icons.Sort2]: "61772",
  [Icons.Spotify]: "61773",
  [Icons.Status]: "61774",
  [Icons.Structure]: "61775",
  [Icons.Table]: "61776",
  [Icons.Tag]: "61777",
  [Icons.Title]: "61778",
  [Icons.Todo]: "61779",
  [Icons.Up]: "61780",
  [Icons.Use]: "61781",
  [Icons.Warning]: "61782",
  [Icons.Whatactuallyis]: "61783",
  [Icons.Whatshouldbe]: "61784",
};
