﻿using System;
using System.Collections.Generic;

namespace SignageBackend.DAL.Models;

public partial class Screen
{
    public long ScreenId { get; set; }

    public string ScreenName { get; set; } = null!;

    public string? Location { get; set; }

    public string? MacAddressId { get; set; }

    public string? Ipaddress { get; set; }

    public string? StatusDevice { get; set; }

    public string? CurrentLayout { get; set; }

    public byte? IsActive { get; set; }

    public DateTime? CreatedDate { get; set; }

    public DateTime? UpdatedDate { get; set; }

    public virtual ICollection<ScheduleScreen> ScheduleScreens { get; set; } = new List<ScheduleScreen>();
}